import get from "lodash/get"

const styles = theme => ({
    container: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: "auto",
        maxWidth: "40px",
        minHeight: "10px",
        margin: "0 auto",
        padding: "2px",
    },
    dotContainer: {
        position: "absolute",
        top: "50%",
        left: "15px",
        transform: "translateY(-50%)",
        width: "10px",
        height: "10px",
        padding: "2px",
        borderRadius: "50%",
        overflow: "hidden",
        transition: "all 300ms ease-out",
    },
    dot: {
        position: "relative",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: get(theme, "appicalTheme.white"),
        borderRadius: "50%",
    },
})

export default styles
