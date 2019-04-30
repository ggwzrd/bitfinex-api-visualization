import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import SwipeableCards from "../"

const props = (merge) => ({
    render: jest.fn(),
    ...merge
})
describe("<SwipeableCards />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<SwipeableCards {...props()} />)
    })
})