import { TICKER } from "./actionNames"

export const createSubscribeAction = () => ({
    type: TICKER,
    subscription: {
        event: "subscribe",
        channel: "ticker",
        symbol: "tBTCUSD",
    },
})

export const placeholder = ""
