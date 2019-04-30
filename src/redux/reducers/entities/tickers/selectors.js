import get from "lodash/get"
// import { createSelector } from "reselect"

// Selectors
export const selectData = state => get(state, "data")
export const selectSelectedId = state => get(state, "selectedId")
export const selectIsLoading = state => get(state, "isLoading")
export const selectIsConnected = state => get(state, "isConnected")
export const selectLoadingError = state => get(state, "loadingError")