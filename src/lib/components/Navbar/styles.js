
import get from "lodash/get"

const styles = theme => ({
    navigationWrapper: {
        zIndex: 2,
        transition: "all 300ms ease",
    },

    appbar: {
        backgroundColor: "transparent",
    },

    toolbar: {
        width: "100%",
        maxWidth: get(theme, "appicalTheme.sizes.pagesMaxWidth"),
        margin: "0 auto",
        padding: `0 ${get(theme, "appicalTheme.spacing.smallest")}`,
        justifyContent: "space-between",

        [theme.breakpoints.up("sm")]: {
            minHeight: get(theme, "appicalTheme.sizes.appBarHeight"),
        },
    },

    leftButton: {
        width: get(theme, "appicalTheme.sizes.iconButtonSize"),
        height: get(theme, "appicalTheme.sizes.iconButtonSize"),
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
        paddingLeft: get(theme, "appicalTheme.spacing.largest"),

        [theme.breakpoints.down("xs")]: {
            paddingLeft: 0,
        },
    },
})

export default styles
