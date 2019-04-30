import get from "lodash/get"

const styles = theme => ({
    container: {
        maxWidth: "100%",
        backgroundColor: "transparent",
        padding: `${get(theme, "customTheme.spacing.largest")} ${get(theme, "customTheme.spacing.medium")}`,

        "@media (max-width: 320px)": {
            padding: `${get(theme, "customTheme.spacing.medium")} ${get(theme, "customTheme.spacing.gap")}`,
        },

        "@media all and (min-width: 0) and (max-width: 480px) and (orientation: landscape)": {
            padding: `${get(theme, "customTheme.spacing.medium")} calc((${get(theme, "customTheme.spacing.large")} * 2) + ${get(theme, "customTheme.spacing.gap")})`,
        },

        "@media all and (min-width: 0) and (max-width: 568px) and (orientation: landscape)": {
            padding: `${get(theme, "customTheme.spacing.medium")} calc((${get(theme, "customTheme.spacing.large")} * 3) + ${get(theme, "customTheme.spacing.gap")})`,
        },
    },
})

export default styles
