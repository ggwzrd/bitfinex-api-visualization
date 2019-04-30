import get from "lodash/get"

export default theme => ({
    root: {
        position: "relative",
        width: `calc(100% - (${get(theme, "customTheme.spacing.gap")} * 2))`,
        height: "auto",
        margin: get(theme, "customTheme.spacing.gap"),
        backgroundColor: "rgb(27, 38, 45)",
        color: "white",
    },

    tables: {
        width: "100%",
        height: "auto",
        minHeight: "calc(19px * 25)",
        display: "flex",
        flexDirection: "row",
    },

    cell: {
        padding: "2px",
        fontSize: "10px",
        color: "white",
    },

    row: {
        height: "15px",
    },

    head: {
        fontSize: "12px",
        color: "#ccc",
    },

    status: {
        display: "flex",
        justifyContent: "flex-end",
        padding: get(theme, "customTheme.spacing.gap"),
    },
})
