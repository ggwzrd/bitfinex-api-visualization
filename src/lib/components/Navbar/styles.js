
import get from "lodash/get"

const styles = theme => ({
    navigationWrapper: {
        zIndex: 2,
        transition: "all 300ms ease",
    },

    appbar: {
        minHeight: get(theme, "customTheme.sizes.appBarHeight"),
        backgroundColor: "#1b262d",
        color: "white",
    },

    toolbar: {
        width: "100%",
        maxWidth: get(theme, "customTheme.sizes.pagesMaxWidth"),
        margin: "0 auto",
        padding: `0 ${get(theme, "customTheme.spacing.smallest")}`,
        justifyContent: "space-between",

        [theme.breakpoints.up("sm")]: {
            minHeight: get(theme, "customTheme.sizes.appBarHeight"),
        },
    },

    leftButton: {
        width: get(theme, "customTheme.sizes.iconButtonSize"),
        height: get(theme, "customTheme.sizes.iconButtonSize"),
        marginLeft: "-12px",
        marginRight: "20px",
    },

    title: {
        flex: "1",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },

    flex: {
        flex: "1",
    },

    transparent: {
        backgroundColor: "transparent",
        color: "inherit",
    },

    tabs: {
        paddingLeft: get(theme, "customTheme.spacing.largest"),

        [theme.breakpoints.down("xs")]: {
            paddingLeft: 0,
        },
    },
})

export default styles
