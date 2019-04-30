// import { reducer as reduxFormReducer } from "redux-form"
import { createBrowserHistory } from "history"
import { connectRouter } from "connected-react-router"

import { ReducerRegistry } from "../ReducerRegistry"

// CORE
import { reducer as requestQueueReducer } from "./core/requestQueue"
import { reducerName as requestQueueReducerName } from "./core/requestQueue/actionNames"

import { reducer as authReducer } from "./core/authentication"
import { reducerName as authReducerName } from "./core/authentication/actionNames"

// import { reducerName as formsReducerName, reducer as formsReducers } from "./entities/forms"

// ENTITIES
import { reducer as ordersReducer } from "./entities/orders"
import { reducerName as ordersReducerName } from "./entities/orders/actionNames"
import { reducer as tickersReducer } from "./entities/tickers"
import { reducerName as tickersReducerName } from "./entities/tickers/actionNames"

export const history = createBrowserHistory()

const registry = new ReducerRegistry()

// Core feature reducers
registry.register(authReducerName, authReducer)
registry.register(requestQueueReducerName, requestQueueReducer)
registry.register("router", connectRouter(history))

// Entity reducers
registry.register(ordersReducerName, ordersReducer)
registry.register(tickersReducerName, tickersReducer)

export default registry.getReducers()
