export const makeActionBuilder = originalAction => (status, payload) => {
    const newAction = { ...originalAction, type: originalAction.type + status, payload }
    delete newAction.request
    return newAction
}

export default {
    makeActionBuilder,
}
