import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import IndicatorDots from "../"

const props = () => ({
    classes: {},    
})

describe("<IndicatorDots />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<IndicatorDots {...props()} />)
    })
})
