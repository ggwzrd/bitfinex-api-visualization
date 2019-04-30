import { ORDER, ORDERS } from "./actionNames"

//  Required variables
export const initialState = {
    /* Holds the user redux object */
    data: {},
    /* Holds the user redux object */
    identifiers: [],
    /* Are we loading new checklist items */
    selectedId: null,
    /* Are we loading new checklist items */
    isLoading: false,
    /* Loading checklist items resulted in an error */
    loadingError: null,
}


// Reducer
export const reducers = {

}
