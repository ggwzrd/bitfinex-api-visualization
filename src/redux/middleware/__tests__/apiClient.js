import { createLoginAction } from "../../reducers/core/authentication/actions"
import { ERROR, LOADED, LOADING } from "../actions"
import createApiClient from "../apiClient"
import { createAddRequestAction } from "../../reducers/core/requestQueue/actions"

// mock api
const createApi = (status, res = {}) => {
    return {
        request: (request) => {
            return new Promise(function(resolve, reject) {
                const response = {
                    data: "Result data",
                    status: status,
                    ...res,
                }

                if(status === 200) {
                    resolve(response)
                } else {
                    reject({
                        error: "error",
                        response: response,
                        ...res
                    })
                }
            })
        }
    }
}

const INITIAL_STORE = {
    authentication: {
        isRefreshingAuthToken: false,
        data: null
    },
}
class Store {
    constructor(state) {
        this.state = state
    }

    getState = jest.fn(() => (this.state))
    dispatch = jest.fn()

    mergeState = newState => this.state = {
        ...this.state,
        ...newState,
    }
}

// Test result helper
function processAction(action, status, data) {
    const newAction = { ...action, type: action.type + status, ...data }
    delete newAction.request
    return newAction
}

describe("middleware/apiClient", () => {
    it("Passes trough actions that don't have a request", () => {
        const store = new Store(INITIAL_STORE)
        const next = jest.fn()
        const middleware = createApiClient(createApi(200))
        const action = {type: 'TEST'}

        middleware(store)(next)(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it("Triggers a LOADING action when a request is passed in and LOADED when the request returned successfull", () => {
        const store = new Store(INITIAL_STORE)
        const next = jest.fn()
        const middleware = createApiClient(createApi(200))

        const action = createLoginAction()
        const loadingAction = processAction(action, LOADING, false)
        const loadedAction = processAction(action, LOADED, { payload: {
            originalPayload: undefined, result: "Result data"
        }})

        return middleware(store)(next)(action)
            .then(() => {
                expect(next).toHaveBeenCalledWith(loadingAction)
                expect(next).toHaveBeenCalledWith(loadedAction)
            })
    })

    it("Triggers an ERROR action when the request failed", () => {
        const store = new Store(INITIAL_STORE)
        const next = jest.fn()
        const middleware = createApiClient(createApi(400))

        const action = createLoginAction()
        const loadingAction = processAction(action, LOADING, false)
        const errorAction = processAction(action, ERROR, {
            payload: {
                originalPayload: undefined,
                result: {
                    error: "error",
                    response: {
                        data: "Result data",
                        status: 400,
                    },
                }
            }
        })

        return middleware(store)(next)(action)
            .then(() => {
                expect(next).toHaveBeenCalledWith(loadingAction)
                expect(next).toHaveBeenCalledWith(errorAction)
            })
    })

    it("Stores the request in the queue and starts a token refresh when a SessionExpiredException exception is received", () => {
        const store = new Store({
            authentication: {
                isRefreshingAuthToken: false,
                data: { token: "test" },
            },
        })
        const response = {
            response:{
                data: {
                    Type: "SessionExpiredException",
                },
            },
        }
        const next = jest.fn()
        const middleware = createApiClient(createApi(401, response))

        const action = createLoginAction("hash")
        const loadingAction = processAction(action, LOADING, false)
        const queueAction = createAddRequestAction(action)

        return middleware(store)(next)(action)
            .then(() => {
                expect(next).toHaveBeenCalledWith(loadingAction)
                expect(store.dispatch).toHaveBeenCalledWith(queueAction)
                expect(store.dispatch).toHaveBeenCalledTimes(2) // Refresh request and adding the request to the queue
            })
    })

    it("Stores the request in the queue when a SessionExpiredException is returned and a token fetch is already happening", () => {
        const store = new Store({
            authentication: {
                isRefreshingAuthToken: false,
                data: { token: "test" },
            },
        })
        const response = {
            response: {
                data: {
                    Type: "SessionExpiredException",
                },
            },
        }
        const next = jest.fn()
        const middleware = createApiClient(createApi(401, response))

        const action = createLoginAction()
        const loadingAction = processAction(action, LOADING, false)
        const queueAction = createAddRequestAction(action)

        const promise = middleware(store)(next)(action)

        // Change the state while we are busy
        store.mergeState({
            authentication: {
                isRefreshingAuthToken: true,
                data: { token: "test" },
            },
        })

        return promise.then(() => {
            expect(next).toHaveBeenCalledWith(loadingAction)
            expect(store.dispatch).toHaveBeenCalledWith(queueAction)
            expect(store.dispatch).toHaveBeenCalledTimes(1) // Refresh request and adding the request to the queue
        })
    })

    it("Retries the request when a SessionExpiredException happened but the token was changed while attempting the refresh", () => {
        const store = new Store({
            authentication: {
                isRefreshingAuthToken: false,
                data: { token: "test" },
            },
        })
        const response = {
            response: {
                data: {
                    Type: "SessionExpiredException",
                },
            },
        }
        const next = jest.fn()
        const middleware = createApiClient(createApi(401, response))

        const action = createLoginAction()
        const loadingAction = processAction(action, LOADING, false)

        const promise = middleware(store)(next)(action)

        // Change the state while we are busy
        store.mergeState({
            authentication: {
                token: "updated"
            },
        })

        return promise.then(() => {
            expect(next).toHaveBeenCalledWith(loadingAction)
            expect(store.dispatch).toHaveBeenCalledWith(action)
            expect(store.dispatch).toHaveBeenCalledTimes(1) // Refresh request and adding the request to the queue
        })
    })

    it("Adds new request actions to the queue when a token refresh is in progress", () => {
        const store = new Store({
            authentication: {
                isRefreshingAuthToken: true,
                data: { token: "test" },
            },
        })
        const next = jest.fn()

        const middleware = createApiClient(createApi(200))
        const action = createLoginAction()
        const loadingAction = processAction(action, LOADING, false)
        const queueAction = createAddRequestAction(action)

        const result = middleware(store)(next)(action)

        expect(result).toBe(undefined)
        expect(next).toHaveBeenCalledTimes(1)
        expect(next).toHaveBeenCalledWith(loadingAction)
        expect(store.dispatch).toHaveBeenCalledTimes(1)
        expect(store.dispatch).toHaveBeenCalledWith(queueAction)
    })
})
