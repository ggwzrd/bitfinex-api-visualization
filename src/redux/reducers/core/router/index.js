import { createSelector } from "reselect"

import { createFeatureSelector } from "../../../utility"

import { reducerName } from "./actionNames"

import * as selectors from "./selectors"

export const selectFeature = createFeatureSelector(reducerName)

export const selectLocation = createSelector(
    selectFeature,
    selectors.selectLocation,
)
export const selectMatch = createSelector(
    selectFeature,
    selectors.selectMatch,
)
export const selectHistory = createSelector(
    selectFeature,
    selectors.selectHistory,
)
export const selectPathname = createSelector(
    selectFeature,
    selectors.selectPathname,
)
export const selectSearch = createSelector(
    selectFeature,
    selectors.selectSearch,
)
export const selectLocationHash = createSelector(
    selectFeature,
    selectors.selectLocationHash,
)