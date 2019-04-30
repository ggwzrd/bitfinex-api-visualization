import keys from "lodash/keys"
import { ORDERS } from "./actionNames"
import { SUBSCRIBE, LOADED, LOADING, ERROR } from "../../../middleware/actions"
import { selectData } from "./selectors"
import { initializeOrderBook, updateBidAndAsks } from "./helpers"

//  Required variables
export const initialState = {
    /* Holds the order book redux object */
    data: {},
    /* Holds the bids identifiers */
    bidIds: [],
    /* Holds the asks identifiers */
    askIds: [],
    /* Holds the currently selected id */
    selectedId: null,
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
    [ORDERS + LOADING](state) {
        return {
            ...state,
            isConnected: false,
            isLoading: true,
            data: {},
        }
    },

    [ORDERS + SUBSCRIBE](state, { result }) {
        return {
            ...state,
            isConnected: true,
            isLoading: false,
            data: {
                ...result,
                bids: {},
                asks: {},
            },
        }
    },

    [ORDERS + LOADED](state, { result: { 1: orders } }) {
        const data = selectData(state)
        const { bids, asks } = orders.length > 3
            ? initializeOrderBook(orders, data)
            : updateBidAndAsks(data, orders)

        return {
            ...state,
            data: {
                ...data,
                bids,
                asks,
            },
            bidIds: keys(bids),
            askIds: keys(asks),
        }
    },

    [ORDERS + ERROR](state, { result: error }) {
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
