
import { lighten, darken, getLuminance } from "@material-ui/core/styles/colorManipulator"

function getTextContrastColor(color) {
    return (getLuminance(color) > 0.5) ? "rgba(0, 0, 0, 0.8)" : "rgb(255, 255, 255)"
}

export function isValidColorValue(value) {
    return value && /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))/i.test(value)
        ? "Invalid color"
        : undefined
}

export const customTheme = {
    primary: "rgba(64, 74, 88, 1)",
    contrast: "rgba(255, 108, 92, 1)",
    contrast_text: "rgba(255, 108, 92, 1)",
}

export const createThemeFromJson = (input) => {
    // fill missing values with defaults
    const theme = {
        primary: (input.primary && input.primary !== "") ? input.primary : customTheme.primary,
        contrast: (input.contrast && input.contrast !== "") ? input.contrast : customTheme.contrast,
        contrast_text: (input.contrast_text && input.contrast_text !== "") ? input.contrast_text : customTheme.contrast_text,
    }

    return ({
        palette: {
            primary: {
                main: theme.primary,
                light: lighten(theme.primary, 0.12),
                dark: darken(theme.primary, 0.12),
                contrastText: getTextContrastColor(theme.primary),
            },
            secondary: {
                main: theme.contrast,
                light: lighten(theme.contrast, 0.12),
                dark: darken(theme.contrast, 0.12),
                contrastText: getTextContrastColor(theme.contrast),
            },
            background: {
                default: theme.mainBg,
            },
        },
        typography: {
            fontFamily: "'Open Sans',Roboto,'Helvetica Neue',Arial,sans-serif",
            title: {
                fontSize: "1.625rem",
                fontWeight: 400,
                lineHeight: "2.063rem",
            },
            subheading: {
                fontSize: "1.25rem",
                fontWeight: 400,
                lineHeight: "1.5rem",
            },
            body1: {
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.5rem",
            },
            button: {
                fontSize: "0.875rem",
                fontWeight: 400,
                textTransform: "capitalize",
            },
            caption: {
                fontSize: "0.75rem",
                fontWeight: 400,
            },
        },
    })
}

export default createThemeFromJson
