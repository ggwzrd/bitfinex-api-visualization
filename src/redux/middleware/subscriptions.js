/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import { SUBSCRIBE, CLOSE, LOADED } from "./actions"
import { makeActionBuilder } from "./helpers"

const handleMessage = (next, action) => (result) => {
    const makeAction = makeActionBuilder(action)
    const { event, ...data } = JSON.parse(result.data)

    if (event === "info") return

    if (event === "subscribed") {
        next(makeAction(SUBSCRIBE, { result: data, originalPayload: action.payload }))
        return
    }

    next(makeAction(
        LOADED,
        { result: data, originalPayload: action.payload },
    ))
}

const handleClose = (next, action) => () => {
    const makeAction = makeActionBuilder(action)
    const payload = { result: "Channel disconnected", originalPayload: action.payload }

    next(makeAction(CLOSE, payload))
}

const subscribe = (ws, next, action) => {
    const { subscription } = action
    ws.send(JSON.stringify(subscription))

    ws.onmessage = handleMessage(next, action)

    ws.onclose = handleClose(next, action)
}


export default subscribe
