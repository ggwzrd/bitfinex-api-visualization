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
    ws.send(JSON.stringify(action.subscription))

    ws.addEventListener("message", handleMessage(next, action))

    ws.addEventListener("close", handleClose(next, action))
}


export default subscribe
