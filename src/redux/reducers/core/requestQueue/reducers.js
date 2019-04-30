import { LOADED } from "../../../middleware/actions"
import { LOGOUT } from "../authentication/actionNames"

import { ADD_REQUEST, FLUSH_REQUEST_QUEUE } from "./actionNames"

// Required variables
export const initialState = {
    /* Holds request actions in the queue until the token is refreshed */
    queue: [],
}

// Reducer
export const reducers = {
    [ADD_REQUEST](state, payload) {
        // No use adding the same requests multiple times
        const requestAction = payload.type
        if (state.queue.find(request => request.type === requestAction)) {
            return state
        }

        return {
            ...state,
            queue: [...state.queue, payload],
        }
    },

    // reset state
    [LOGOUT + LOADED]() {
        return initialState
    },
    [FLUSH_REQUEST_QUEUE]() { return initialState },
}
