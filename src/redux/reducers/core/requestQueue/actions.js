import { ADD_REQUEST, FLUSH_REQUEST_QUEUE } from "./actionNames"

// Action creators
export function createAddRequestAction(requestAction) {
    return { type: ADD_REQUEST, payload: requestAction }
}

export function createFlushQueueAction() {
    return { type: FLUSH_REQUEST_QUEUE }
}
