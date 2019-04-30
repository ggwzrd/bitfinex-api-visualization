import requestQueue from "../requestQueue"
import { REFRESH } from "../../reducers/core/authentication/actionNames"
import { selectRequests } from "../../reducers/core/requestQueue"
import { createFlushQueueAction } from "../../reducers/core/requestQueue/actions"

const create = () => {
    const store = {
        getState: jest.fn(() => ({
            "requestQueue": {
                queue: [
                    { type: "Test request action1" },
                    { type: "Test request action2" },
                ]
            }
        })),
        dispatch: jest.fn(),
    }

    const next = jest.fn()

    const invoke = (action) => requestQueue(store)(next)(action)

    return {
        store,
        next,
        invoke
    }
}

describe("middleware/requestQueue", () => {
    it('Passes trough all actions to next', () => {
        const { next, invoke } = create()
        const action = {type: 'TEST'}
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it('Triggers queued requests and a flush action when a REFRESH action is passed', () => {
        const { store, next, invoke } = create()
        const action = {type: REFRESH}
        const requests = selectRequests(store.getState())

        invoke(action)
        expect(next).toHaveBeenCalledWith(action)

        expect(store.dispatch).toHaveBeenCalledTimes(requests.length + 1) // The stored requests + the flush action
        expect(store.dispatch).toHaveBeenCalledWith(createFlushQueueAction())

        requests.forEach((storedCall) => {
            expect(store.dispatch).toHaveBeenCalledWith(storedCall)
        })
    })

})
