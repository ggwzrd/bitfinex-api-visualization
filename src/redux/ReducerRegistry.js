import assign from "lodash/assign"

// This class holds our active reducers.
// When a reducer is imported somewhere in code it gets automatically added to the store.

export class ReducerRegistry {
    constructor() {
        this.emitChange = null
        this.reducers = {}
    }

    getReducers() {
        return { ...this.reducers }
    }

    register(name, reducer) {
        if (this.reducers[name]) return // Skip if the reducer already exists

        assign(this.reducers, { [name]: reducer })

        if (this.emitChange) this.emitChange(this.getReducers())
    }

    setChangeListener(listener) {
        this.emitChange = listener
    }
}

const reducerRegistry = new ReducerRegistry()
export default reducerRegistry
