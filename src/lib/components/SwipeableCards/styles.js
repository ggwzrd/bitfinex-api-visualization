import get from "lodash/get"

const styles = theme => ({
    container: {
        maxWidth: "100%",
        backgroundColor: "transparent",
        padding: `${get(theme, "appicalTheme.spacing.largest")} ${get(theme, "appicalTheme.spacing.medium")}`,

        "@media (max-width: 320px)": {
            padding: `${get(theme, "appicalTheme.spacing.medium")} ${get(theme, "appicalTheme.spacing.gap")}`,
        },

        "@media all and (min-width: 0) and (max-width: 480px) and (orientation: landscape)": {
            padding: `${get(theme, "appicalTheme.spacing.medium")} calc((${get(theme, "appicalTheme.spacing.large")} * 2) + ${get(theme, "appicalTheme.spacing.gap")})`,
        },

        "@media all and (min-width: 0) and (max-width: 568px) and (orientation: landscape)": {
            padding: `${get(theme, "appicalTheme.spacing.medium")} calc((${get(theme, "appicalTheme.spacing.large")} * 3) + ${get(theme, "appicalTheme.spacing.gap")})`,
        },
    },
})

export default styles
