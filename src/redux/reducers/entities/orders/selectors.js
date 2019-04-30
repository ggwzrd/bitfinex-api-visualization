import get from "lodash/get"
import orderBy from "lodash/orderBy"
import slice from "lodash/slice"
import { createSelector } from "reselect"

// Selectors
export const selectData = state => get(state, "data")
export const selectBidIds = state => get(state, "bidIds")
export const selectAskIds = state => get(state, "askIds")
export const selectSelectedId = state => get(state, "selectedId")
export const selectIsLoading = state => get(state, "isLoading")
export const selectIsConnected = state => get(state, "isConnected")
export const selectLoadingError = state => get(state, "loadingError")

export const selectBids = createSelector(
    selectData,
    selectBidIds,
    (data, ids) => slice(orderBy(ids.map(id => get(data, `bids[${id}]`)), ["price"], ["desc"]), 0, 25),
)
export const selectAsks = createSelector(
    selectData,
    selectAskIds,
    (data, ids) => slice(orderBy(ids.map(id => get(data, `asks[${id}]`)), ["price"], ["asc"]), 0, 25),
)
export const selectCurrentOrder = createSelector(
    selectData,
    selectSelectedId,
    (data, selectedId) => get(data, selectedId),
)
