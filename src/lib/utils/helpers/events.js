export const preventPropagation = (callback = null) =>
    (event) => {
        event.stopPropagation()
        if (callback) callback(event)
    }

export default preventPropagation
