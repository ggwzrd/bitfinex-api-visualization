import get from "lodash/get"
import { createSelector } from "reselect"

// Selectors
export const selectLocation = state => get(state, "location")
export const selectMatch = state => get(state, "match")
export const selectHistory = state => get(state, "history")


export const selectPathname = createSelector(
    selectLocation,
    location => get(location, "pathname"),
)
export const selectSearch = createSelector(
    selectLocation,
    location => get(location, "search"),
)
export const selectLocationHash = createSelector(
    selectLocation,
    location => get(location, "hash"),
)
