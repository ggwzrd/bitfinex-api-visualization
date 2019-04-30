import { applyMiddleware, compose, createStore } from "redux"
import persistCombineReducers from "redux-persist/lib/persistCombineReducers"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import createFilter from "redux-persist-transform-filter"
import { routerMiddleware } from "connected-react-router"

import requestQueue from "./middleware/requestQueue"

import { reducerName as authReducerName } from "./reducers/core/authentication/actionNames"
import { reducerName as orderReducerName } from "./reducers/entities/orders/actionNames"
import { reducerName as tickerReducerName } from "./reducers/entities/tickers/actionNames"
import createApiClient from "./middleware/apiClient"
import constants from "../constants"
import configureClient from "../configure/client"

import reducers, { history } from "./reducers"

export const saveOrdersFilter = createFilter(
    orderReducerName,
    ["data", "bidIds", "askIds"],
)

export const loadOrdersFilter = createFilter(
    orderReducerName,
    null,
    ["data", "bidIds", "askIds"],
)

export const saveTickersFilter = createFilter(
    tickerReducerName,
    ["data"],
)

export const loadTickersFilter = createFilter(
    tickerReducerName,
    null,
    ["data"],
)

export const saveAuthFilter = createFilter(
    authReducerName,
    ["data"],
)

export const loadAuthFilter = createFilter(
    authReducerName,
    null,
    ["data"],
)


const storageConfig = {
    key: "bav",
    storage,
    whitelist: [
        orderReducerName,
        tickerReducerName,
        authReducerName,
    ],
    transforms: [
        saveOrdersFilter,
        loadOrdersFilter,
        saveTickersFilter,
        loadTickersFilter,
        saveAuthFilter,
        loadAuthFilter,
    ],
}

const configureStore = (initialState = {}) => {
    const client = configureClient(constants.baseUrl)
    const usableReducers = persistCombineReducers(storageConfig, reducers)

    const composeWithDevToolsExtension = process.env.REACT_APP_ENV === "dev"
        // eslint-disable-next-line no-undef,no-underscore-dangle
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    const composeEnhancers = (typeof composeWithDevToolsExtension === "function")
        ? composeWithDevToolsExtension
        : compose

    const middleware = composeEnhancers(applyMiddleware(
        routerMiddleware(history),
        thunk,
        requestQueue,
        createApiClient(client),
    ))

    return createStore(usableReducers, initialState, middleware)
}

export default configureStore
