import { createActionName } from "../../../utility"

export const reducerName = "orders"

// Actions
export const ORDER = createActionName(reducerName, "ORDER")
export const ORDERS = createActionName(reducerName, "ORDERS")
