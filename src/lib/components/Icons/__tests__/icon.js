import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Icon from "../Icon"

const title = "Appical"
const path = (<path
    d="M20.9,6.9L20.9,6.9l-9-5l-9,5l0.4,0.2L3,6.9V17l9,5v0l0,0l6.5-3.7l2.4,1.4V17v0L20.9,6.9L20.9,6.9z M12,19.2L12,19.2L12,19.2l-6.5-3.6V8.3l0,0L12,4.6l6.5,3.6l0,0v7.3L12,19.2z"
/>)

describe("<Icon />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Icon title={title} path={path}/>)
    })
})
