import { ORDERS } from "./actionNames"

export const createSubscribeAction = (frequency = "F1", precision = "P1") => ({
    type: ORDERS,
    subscription: {
        event: "subscribe",
        channel: "book",
        symbol: "tBTCUSD",
        freq: frequency,
        prec: precision,
    },
})

export const placeholder = ""
