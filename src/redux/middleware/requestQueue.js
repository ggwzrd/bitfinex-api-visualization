// Listens for a refresh token action and then retries all requests in the queue

import { REFRESH } from "../reducers/core/authentication/actionNames"
import { selectRequests } from "../reducers/core/requestQueue"
import { createFlushQueueAction } from "../reducers/core/requestQueue/actions"

const requestQueue = store => next => (action) => {
    next(action)
    if (action.type === REFRESH) {
        const requests = selectRequests(store.getState())
        if (!requests || requests.length === 0) return

        // Empty the request queue
        store.dispatch(createFlushQueueAction())

        // Re-trigger the queued actions
        requests.forEach((request) => {
            store.dispatch(request)
        })
    }
}

export default requestQueue
