import { LOGOUT } from "../reducers/core/authentication/actionNames"

import { LOADING } from "./actions"

import { makeActionBuilder } from "./helpers"
import subscribe from "./subscriptions"
// export const addTokenToRequest = (state, request) => {
//     const authToken = "test"
//     let preppedRequest = authToken
//         ? {
//             ...request,
//             headers: {
//                 ...request.headers || null,
//                 Authorization: `Bearer ${authToken}`,
//             },
//         }
//         : request

//     if (process.env.REACT_APP_DIAGNOSTICS === "TRUE") {
//         preppedRequest = {
//             ...request,
//             headers: {
//                 ...preppedRequest.headers,
//             },
//         }
//     }

//     return preppedRequest
// }

export const createApiClient = () => store => next => (action) => {
    const makeAction = makeActionBuilder(action)
    const { callback, subscription } = action

    next(makeAction(LOADING))

    if (!action || !subscription) {
        if (callback) {
            const { dispatch, getState } = store

            next(action)
            callback(dispatch, getState, action.payload)
        }

        return next(action)
    }

    return subscribe(next, action)
}

export default createApiClient
