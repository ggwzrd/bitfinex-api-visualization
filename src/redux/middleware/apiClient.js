import get from "lodash/get"

import {
    selectAuthToken,
    selectIsRefreshingAuthToken,
    selectRefreshToken,
} from "../reducers/core/authentication"
import { tokenRefresh, logout } from "../reducers/core/authentication/actions"
import { LOGOUT } from "../reducers/core/authentication/actionNames"
import { createAddRequestAction } from "../reducers/core/requestQueue/actions"

import { ERROR, LOADED, LOADING } from "./actions"

export const addTokenToRequest = (state, request) => {
    const authToken = selectAuthToken(state)
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
    if (selectIsRefreshingAuthToken(store.getState())) {
        return store.dispatch(createAddRequestAction(action))
    }

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
            }

            // if the request failed because the session was not found logout straight away
            if (get(error, "response.data.Type") === "SessionNotFoundException") store.dispatch(logout())

            // if the request failed because of a login issue
            // (exception type: SessionExpiredException)
            if (get(error, "response.data.Type") === "SessionExpiredException") {
                const currentToken = selectAuthToken(store.getState())
                // It is possible the auth token was updated while this request happened.
                if (`Bearer ${currentToken}` !== get(request, "headers.Authorization")) {
                    store.dispatch(action)
                    return
                }

                const refreshToken = selectRefreshToken(store.getState())

                // store current request in the queue so we can restart when we have a new token.
                store.dispatch(createAddRequestAction(action))

                if (!selectIsRefreshingAuthToken(store.getState())) {
                    // Only request a new token if we're not currently refreshing.
                    store.dispatch(tokenRefresh(refreshToken))
                }
            } else {
                next(makeAction(ERROR, {
                    payload: { result: error, originalPayload: action.payload },
                }))
            }
        },
    )
}

export default createApiClient
