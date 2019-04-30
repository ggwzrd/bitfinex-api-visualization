import get from "lodash/get"

// Selectors
export const selectRequests = state => get(state, "queue")