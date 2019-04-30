import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Expand from "../Expand"

describe("<Expand />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Expand />)
        expect(element).toMatchSnapshot()
    })
})
