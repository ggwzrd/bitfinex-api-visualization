export const noOp = () => null
export const emptyArray = []
export const emptyObject = {}

export const isEmpty = value =>
    value === emptyObject

export const stringify = value => JSON.stringify(value)

export const merge = (existingData, newData) => {
    const returnData = { ...existingData }
    Object.keys(newData).forEach((hash) => {
        if (!returnData.hasOwnProperty(hash)) {
            returnData[hash] = newData[hash]
        } else {
            returnData[hash] = { ...returnData[hash], ...newData[hash] }
        }
    })
    return returnData
}
