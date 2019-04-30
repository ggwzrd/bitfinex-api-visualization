import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import LinkedIn from "../LinkedIn"

describe("<LinkedIn />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<LinkedIn />)
    })
})
