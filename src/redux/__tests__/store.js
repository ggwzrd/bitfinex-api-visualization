import keys from "lodash/keys"
import groupBy from "lodash/groupBy"
import isFunction from "lodash/isFunction"

import { reducers as authentication } from "../reducers/core/authentication"
import { reducers as requestQueue } from "../reducers/core/requestQueue"

const reducers = {
    authentication,
    requestQueue,
}

const regexMatcher = /undefined|null/g

expect.extend({
    toBeValidActionName(received, levelName) {
        const containsInvalid = regexMatcher.test(received)

        if (containsInvalid) {
            return {
                message: () =>
                    `Expected a valid action name but got ${received} on reducer ${levelName}`,
                pass: false,
            }
        } else {
            return {
                message: () =>
                    `Expected ${received} not to be a valid action name on reducer ${levelName}`,
                pass: true,
            }
        }
    },
});

describe("Store", () => {
    it("Does not have any import issues", () => {
        const checkLevel = ([levelName, level]) => {
            const levelProps = keys(level)
                .map(prop => [prop,level[prop]])

            const groups = groupBy(levelProps, ([_, value]) => isFunction(value))
            const reducerActions = groups[true] || []
            const childReducers = groups[false] || []

            reducerActions.forEach(([action]) => {
                expect(action).toBeValidActionName(levelName)
            })

            if (childReducers) {
                childReducers
                    .map(([nextLevelName, value]) => [
                        levelName ? `${levelName}.${nextLevelName}` : nextLevelName,
                        value
                    ])
                    .forEach(checkLevel)
            }
        }

        checkLevel(["", reducers])
    })
})
