import get from "lodash/get"

const styles = theme => ({
    root: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "rgba(44, 57, 64)",
        paddingTop: get(theme, "customTheme.sizes.appBarHeight"),
    },
})

export default styles
