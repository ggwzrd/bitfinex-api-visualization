import get from "lodash/get"
import reduce from "lodash/reduce"

export const outerJoin =
    (dataSetInner, dataSetOuter, selectorInner = null, selectorOuter = null) => {
        const outerSelector = selectorOuter || selectorInner || get

        return reduce(
            dataSetInner,
            (joinedSet, innerValue) => {
                const key = selectorOuter && selectorInner
                    ? selectorInner.call(null, joinedSet, innerValue)
                    : innerValue

                const outerValue = outerSelector.call(null, dataSetOuter, key)

                if (outerValue || outerValue === false) {
                    joinedSet.push(outerValue)
                }

                return joinedSet
            },
            [],
        )
    }

export const calculateSetChanges = (left, right) => {
    const added = right.filter(item => !left.includes(item))

    return left.reduce(
        (items, item) => {
            if (right.includes(item)) {
                items.unchanged.push(item)
            } else {
                items.deleted.push(item)
            }

            return items
        },
        { added, unchanged: [], deleted: [] },
    )
}
