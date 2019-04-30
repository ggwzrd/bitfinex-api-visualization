import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Twitter from "../Twitter"

describe("<Twitter />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Twitter />)
    })
})
