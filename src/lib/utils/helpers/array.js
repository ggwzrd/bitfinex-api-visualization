import first from "lodash/first"
import get from "lodash/get"

export const reorder = (source, from, to) => {
    source.splice(to, 0, first(source.splice(from, 1)))

    return source
}

export const count = (array, predicate, start = 0) =>
    array.reduce(
        (currentCount, value, index) => currentCount + predicate(value, index),
        start,
    )

export const arrayify = items =>
    Array.isArray(items) ? items : [items]

// get the previous value in an array if null it returns -1
export const prev = (array, value) => get(array, array.indexOf(value) - 1)

export const next = (array, value) => get(array, array.indexOf(value) + 1)

export const emptyArray = []
