import { createSelector } from "reselect"

import { createReducer, createFeatureSelector } from "../../../utility"

import { reducers, initialState } from "./reducers"
import { reducerName } from "./actionNames"

import * as selectors from "./selectors"

// Action creators
export * from "./reducers"

export const selectFeature = createFeatureSelector(reducerName)

export const selectData = createSelector(
    selectFeature,
    selectors.selectData,
)
export const selectSelectedId = createSelector(
    selectFeature,
    selectors.selectSelectedId,
)
export const selectisLoading = createSelector(
    selectFeature,
    selectors.selectIsLoading,
)
export const selectIsConnected = createSelector(
    selectFeature,
    selectors.selectIsConnected,
)
export const selectLoadingError = createSelector(
    selectFeature,
    selectors.selectLoadingError,
)

export const reducer = createReducer(reducers, initialState)
