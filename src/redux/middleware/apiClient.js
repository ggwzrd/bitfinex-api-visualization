import { LOGOUT } from "../reducers/core/authentication/actionNames"

import { ERROR, LOADED, LOADING } from "./actions"

export const addTokenToRequest = (state, request) => {
    const authToken = "test"
    let preppedRequest = authToken
        ? {
            ...request,
            headers: {
                ...request.headers || null,
                Authorization: `Bearer ${authToken}`,
            },
        }
        : request

    if (process.env.REACT_APP_DIAGNOSTICS === "TRUE") {
        preppedRequest = {
            ...request,
            headers: {
                ...preppedRequest.headers,
            },
        }
    }

    return preppedRequest
}

export const createApiClient = client => store => next => (action) => {
    function makeAction(status, data) {
        const newAction = { ...action, type: action.type + status, ...data }
        delete newAction.request
        return newAction
    }
    const { callback } = action

    if (!action || !action.request) {
        if (callback) {
            const { dispatch, getState } = store

            next(action)
            callback(dispatch, getState, action.payload)
        }

        return next(action)
    }

    next(makeAction(LOADING, false))

    let { request } = action

    if (!request.url.startsWith("http")) {
        request = addTokenToRequest(store.getState(), action.request)
    }

    return client.request(request).then(
        (result) => {
            const payload = { result: result.data, originalPayload: action.payload }

            next(makeAction(LOADED, { payload }))

            if (callback) {
                const { dispatch, getState } = store

                callback(dispatch, getState, payload)
            }
        },
        (error) => {
            if (action.type === LOGOUT) {
                next(makeAction(LOADED, {
                    payload: { result: null, originalPayload: action.payload },
                }))
            } else {
                next(makeAction(ERROR, {
                    payload: { result: error, originalPayload: action.payload },
                }))
            }
        },
    )
}

export default createApiClient