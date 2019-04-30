import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Warning from "../Warning"

describe("<Warning />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Warning />)
    })
})
