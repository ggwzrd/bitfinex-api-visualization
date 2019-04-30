import get from "lodash/get"

const updateCumulativeOrder = (price, orderPrice, count, amount) => {
    const order = { price: orderPrice, count, amount }
    // const currentAmount = parseFloat(get(price, "amount", 0))
    const fixAmount = Math.abs(amount)

    return {
        ...(price || order),
        count,
        amount: fixAmount.toFixed(1),
        // total: (currentAmount + fixAmount).toFixed(1),
    }
}

export const updateBidAndAsks = (orginalData, order) => {
    const [price, count, amount] = order
    const bid = get(orginalData, `bids.[${price}]`)
    const ask = get(orginalData, `asks.[${price}]`)

    if (count > 0) {
        if (amount > 0) {
            const updated = updateCumulativeOrder(bid, ...order)

            return {
                ...orginalData,
                bids: {
                    ...orginalData.bids,
                    [price]: updated,
                },
            }
        }
        if (amount < 0) {
            const updated = updateCumulativeOrder(ask, ...order)

            return {
                ...orginalData,
                asks: {
                    ...orginalData.asks,
                    [price]: updated,
                },
            }
        }
    } else if (count === 0) {
        const copyOfData = { ...orginalData }
        if (amount === 1 && bid) delete copyOfData.bids[price]
        if (amount === -1 && ask) delete copyOfData.bids[price]

        return copyOfData
    }

    return orginalData
}

export const initializeOrderBook = (orders, channelData) =>
    orders.reduce(updateBidAndAsks, { ...channelData })

export default {
    initializeOrderBook,
    updateBidAndAsks,
}
