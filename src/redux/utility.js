import memoize from "memoize-one"

// default action names
export const UPDATE = "_UPDATE"
export const CREATE = "_CREATE"
export const DELETE = "_DELETE"
export const DUPLICATE = "_DUPLICATE"
export const SELECT = "_SELECT"
export const ADD = "_ADD"
export const MOVE = "_MOVE"
export const CLONE = "_CLONE"
export const REPUBLISH = "_REPUBLISH"
export const REORDER = "_REORDER"
export const TALENT = "_TALENT"
export const PREVIEW = "_PREVIEW"

export const createActionName = (reducerName, name) => `app/${reducerName}/${name}`

export const createReducer = (reducer, initialState) =>
    (state = initialState, { type, payload }) => {
        if (reducer[type]) {
            return reducer[type](state, payload)
        }
        return state
    }

export const createFeatureSelector = memoize(featureName => state => state[featureName])
