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
export const selectBidIds = createSelector(
    selectFeature,
    selectors.selectBidIds,
)
export const selectAskIds = createSelector(
    selectFeature,
    selectors.selectAskIds,
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
export const selectBids = createSelector(
    selectFeature,
    selectors.selectBids,
)
export const selectAsks = createSelector(
    selectFeature,
    selectors.selectAsks,
)
export const selectCurrentOrder = createSelector(
    selectFeature,
    selectors.selectCurrentOrder,
)

export const reducer = createReducer(reducers, initialState)
