import get from "lodash/get"
import sortBy from "lodash/sortBy"
import { createSelector } from "reselect"

// Selectors
export const selectData = state => get(state, "data")
export const selectIdentifiers = state => get(state, "identifiers")
export const selectSelectedId = state => get(state, "selectedId")
export const selectIsLoading = state => get(state, "isLoading")
export const selectLoadingError = state => get(state, "loadingError")

export const selectOrders = createSelector(
    selectData,
    selectIdentifiers,
    (data, identifies) => sortBy(identifies.map(idx => data[idx]), "endedAt"),
)
export const selectCurrentOrder = createSelector(
    selectData,
    selectSelectedId,
    (data, selectedId) => get(data, selectedId),
)
