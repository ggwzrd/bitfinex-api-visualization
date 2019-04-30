import { createSelector } from "reselect"

import { createReducer, createFeatureSelector } from "../../../utility"

import { reducers, initialState } from "./reducers"
import { reducerName } from "./actionNames"

import * as selectors from "./selectors"

// Action creators
export * from "./reducers"

export const selectFeature = createFeatureSelector(reducerName)

export const selectIsLoggedIn = createSelector(
    selectFeature,
    selectors.selectIsLoggedIn,
)
export const selectIsLoading = createSelector(
    selectFeature,
    selectors.selectIsLoading,
)
export const selectLoadingError = createSelector(
    selectFeature,
    selectors.selectLoadingError,
)

export const reducer = createReducer(reducers, initialState)
