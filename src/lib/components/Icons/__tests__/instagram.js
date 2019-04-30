import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Instagram from "../Instagram"

describe("<Instagram />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Instagram />)
    })
})
