import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Skype from "../Skype"

describe("<Skype />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Skype />)
    })
})
