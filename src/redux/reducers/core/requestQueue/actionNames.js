import { createActionName } from "../../../utility"

export const reducerName = "requestQueue"

// Actions
export const ADD_REQUEST = createActionName(reducerName, "ADD_REQUEST")
export const FLUSH_REQUEST_QUEUE = createActionName(reducerName, "FLUSH_REQUEST_QUEUE")
