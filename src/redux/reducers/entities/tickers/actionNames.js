import { createActionName } from "../../../utility"

export const reducerName = "tickers"

// Actions
export const TICKER = createActionName(reducerName, "TICKER")
export const TICKERS = createActionName(reducerName, "TICKERS")
