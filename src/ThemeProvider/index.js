import React from "react"
import PropTypes from "prop-types"
import JssProvider from "react-jss/lib/JssProvider"
import { createGenerateClassName } from "@material-ui/core/styles/index"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import configureJss from "../configure/Jss"
import { convertToMuiTheme } from "./processTheme"

const jssWrapper = configureJss()
const generateClassName = createGenerateClassName()

const ThemeProvider = ({ children, theme }) => {
    const muiTheme = convertToMuiTheme(theme)

    return (
        <MuiThemeProvider theme={muiTheme}>
            <JssProvider jss={jssWrapper} generateClassName={generateClassName}>
                { children }
            </JssProvider>
        </MuiThemeProvider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object.isRequired,
}

ThemeProvider.defaultProps = {
    children: null,
}

export default ThemeProvider
