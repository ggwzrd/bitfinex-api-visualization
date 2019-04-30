import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Pencil from "../Pencil"

describe("<Pencil />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Pencil />)
    })
})
