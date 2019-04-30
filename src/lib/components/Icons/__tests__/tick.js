import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Tick from "../Tick"

describe("<Tick />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Tick />)
    })
})
