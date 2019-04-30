import get from "lodash/get"

// Selectors
export const selectData = state => get(state, "data")
export const selectIsLoggedIn = state => !!get(state, "data")
export const selectIsLoading = state => get(state, "isLoading")
export const selectLoadingError = state => get(state, "loadingError")
