import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export function convertToMuiTheme(input) {
    return createMuiTheme({
        customTheme: input,
        palette: {
            primary: {
                main: input.primary,
                light: input.primaryLight,
                dark: input.primaryDark,
                contrastText: input.primaryText,
            },
            secondary: {
                main: input.contrast,
                light: input.contrastLight,
                dark: input.contrastDark,
                contrastText: input.contrastText,
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
        props: {
            // The component name ⚛️
            MuiButtonBase: {
                // The property to apply
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    })
}


export default convertToMuiTheme
