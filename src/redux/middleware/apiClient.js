import { LOADING } from "./actions"

import { createFlushQueueAction, createAddRequestAction } from "../reducers/core/requestQueue/actions"
import { makeActionBuilder } from "./helpers"
import subscribe from "./subscriptions"

export const createApiClient = ws => store => next => (action) => {
    const { dispatch } = store
    const makeAction = makeActionBuilder(action)
    const { subscription } = action

    ws.addEventListener("open", () => {
        dispatch(createFlushQueueAction())
    })

    if (!action || !subscription) {
        next(action)
        return
    }

    next(makeAction(LOADING, false))

    if (ws.readyState !== ws.OPEN) {
        dispatch(createAddRequestAction(action))
        return
    }

    subscribe(ws, next, action)
}

export default createApiClient
