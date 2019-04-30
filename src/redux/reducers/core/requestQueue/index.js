import { createSelector } from "reselect"

import { createReducer, createFeatureSelector } from "../../../utility"

import { reducers, initialState } from "./reducers"
import * as selectors from "./selectors"
import { reducerName } from "./actionNames"

export * from "./reducers"

// selectors
export const featureSelector = createFeatureSelector(reducerName)

export const selectRequests = createSelector(
    featureSelector,
    selectors.selectRequests,
)

export const reducer = createReducer(reducers, initialState)
