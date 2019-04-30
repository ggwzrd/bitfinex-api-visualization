export const cardScaleDown = {
    "@keyframes cardScaleDown": {
        from: {
            transform: "scale(1.1)",
            boxShadow: "0 24px 40px 0 rgba(0, 0, 0, 0.7)",
            opacity: 0,
        },
        to: {
            transform: "scale(1)",
            boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2)",
            opacity: 1,
        },
    },

    "@keyframes bump": {
        "0%": {
            transform: "scale(1.3)",
        },
        "50%": {
            transform: "scale(0.9)",
        },
        "100%": {
            transform: "scale(1)",
        },
    },

    "@keyframes twistScale": {
        "0%": {
            transform: "rotate(-540deg) scale(0.4)",
        },
        "90%": {
            transform: "rotate(0deg) scale(1.1)",
        },
        "100%": {
            transform: "rotate(0deg) scale(1)",
        },
    },

    "@keyframes fadeInAndEnterInPosition": {
        "0%": {
            opacity: 0,
            transform: "translateY(50%)",
        },
        "50%": {
            opacity: 1,
        },
        "90%": {
            transform: "translateY(50%)",
            opacity: 1,
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)",
        },
    },

    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        },
    },
}

export default {
    ...cardScaleDown,
}
