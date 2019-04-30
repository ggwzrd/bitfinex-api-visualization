import React from "react"
import get from "lodash/get"

export function validateChildTypes(...childTypes) {
    return (props, propName, componentName) => {
        const prop = get(props, propName)
        const children = React.Children.toArray(prop)

        const hasChildMismatch = children.some(child =>
            !childTypes.includes(child.type))

        if (hasChildMismatch) {
            return new Error(`${componentName} can only have children of ${childTypes.length > 1 ? "types" : "type"} ${childTypes.join(", ")}. Others will be omitted from rendering.`)
        }

        return null
    }
}

export default {
    validateChildTypes,
}
