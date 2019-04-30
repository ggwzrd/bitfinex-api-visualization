import { TICKER } from "./actionNames"
import { SUBSCRIBE, LOADED, LOADING, ERROR } from "../../../middleware/actions"
import { selectData } from "./selectors"

//  Required variables
export const initialState = {
    /* Holds the order book redux object */
    data: {},
    /* Holds the isLoading state of the book websocket */
    isLoading: false,
    /* Holds the connection state of the websocket */
    isConnected: false,
    /* Holds the closed state of the websocket */
    isClosed: false,
    /* Holds errors in the connection */
    loadingError: null,
}


// Reducer
export const reducers = {
    [TICKER + LOADING](state) {
        return {
            ...state,
            isConnected: false,
            isLoading: true,
            data: {},
        }
    },

    [TICKER + SUBSCRIBE](state, { result }) {
        return {
            ...state,
            isConnected: true,
            isLoading: false,
            data: {
                ...result,
            },
        }
    },

    [TICKER + LOADED](state, { result: { 1: ticker } }) {
        const data = selectData(state)

        return {
            ...state,
            data: {
                ...data,
                ...ticker,
            },
        }
    },

    [TICKER + ERROR](state, { result: error }) {
        return {
            ...state,
            data: {},
            isConnected: false,
            isLoading: false,
            isClosed: true,
            loadingError: error,
        }
    },
}
