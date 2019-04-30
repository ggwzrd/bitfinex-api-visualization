import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Navbar from "../"

describe("<Navbar />", () => {
    it("Does not explode", () => {
        const component = createShallow()(<Navbar />)
        expect(component).toMatchSnapshot()
    })
})
