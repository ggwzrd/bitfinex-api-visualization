import { createActionName } from "../../../utility"

export const reducerName = "authentication"

// Actions names

export const LOGOUT = createActionName(reducerName, "LOGOUT")
export const LOGIN = createActionName(reducerName, "LOGIN")
