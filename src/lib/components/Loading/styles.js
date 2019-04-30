import get from "lodash/get"

const styles = theme => ({
    root: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        flexWrap: "wrap",
        flexDirection: "column",
        padding: `0 ${get(theme, "spacing.unit")}px`,

        "&.loading": {
            display: "flex",
        },

        "&.transparent": {
            backgroundColor: "transparent",
        },
    },

    appicalLogo: {
        textAlign: "center",
        marginBottom: "32px",
    },

    loader: {
        width: "100%",
        maxWidth: "350px",
        color: "inherit",
    },
})

export default styles
