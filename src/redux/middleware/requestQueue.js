// Listens for a refresh token action and then retries all requests in the queue

// import { selectRequests } from "../reducers/core/requestQueue"
// import { createFlushQueueAction } from "../reducers/core/requestQueue/actions"

const requestQueue = store => next => (action) => {
    next(action)
}

export default requestQueue
