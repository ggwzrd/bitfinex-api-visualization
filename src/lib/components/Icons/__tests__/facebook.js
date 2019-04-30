import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Facebook from "../Facebook"

describe("<Facebook />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Facebook />)
    })
})
