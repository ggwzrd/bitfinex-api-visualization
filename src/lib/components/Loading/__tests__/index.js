import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Loading from "../Loading"

const createProps = merge => ({
    classes: {},
    options: {
        animationData: {}
    }
})

describe("<Loading />", () => {
    it("Does not explode", () => {
        const element = createShallow()(<Loading />)
        expect(Loading).toMatchSnapshot()
    })
})
