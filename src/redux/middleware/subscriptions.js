/* eslint-disable no-undef */
// import WebSocket from "ws"

import { SUBSCRIBE, CLOSE, LOADED } from "./actions"
import { makeActionBuilder } from "./helpers"

const subscribe = (next, action) => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2")
    const makeAction = makeActionBuilder(action)
    const { subscription } = action

    ws.onopen = () => {
        ws.send(JSON.stringify(subscription))
    }

    ws.onmessage = (result) => {
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

    ws.onclose = () => {
        const payload = { result: "Channel disconnected", originalPayload: action.payload }

        next(makeAction(CLOSE, payload))
    }
}


export default subscribe
