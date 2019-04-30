import get from "lodash/get"
import first from "lodash/first"

const letterStripperRegex = /[0-9]/g

export const stripLetters = (stringValue, maxLength = 0, defaultValue = "0") => {
    if (!stringValue || !stringValue.length) return defaultValue

    const numbers = stringValue.match(letterStripperRegex)

    if (!numbers.length) return defaultValue

    return maxLength > 0
        ? numbers.slice(0, maxLength).join("")
        : numbers.join("")
}

export const truncateString = (stringValue, maxLength, truncationTrail = "...") =>
    get(stringValue, "length", 0) > maxLength
        ? `${stringValue.substring(0, maxLength)}${truncationTrail}`
        : stringValue

export const concatHumanized = (operator, ...values) => {
    if (values.length < 2) {
        return first(values)
    }

    return values.reduce(
        (text, next, idx) => {
            if (idx === 0) {
                return next
            }
            if (idx === values.length) {
                return `${text} ${operator} ${next}`
            }

            return `${text}, ${next}`
        },
        "",
    )
}
