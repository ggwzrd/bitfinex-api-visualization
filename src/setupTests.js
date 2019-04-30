/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

// Setup enzyme's react adapter
configure({ adapter: new Adapter() })

// Polyfill for older browsers to ensure carousel passes tests
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: () => null,
        removeListener: () => null,
    }
}
