import React from "react"
import PropTypes from "prop-types"
import injectSheet from "react-jss"

// import Loading from "./lib/views/Loading/Loading"
import theme from "./ThemeProvider/theme"
import ThemeProvider from "./ThemeProvider"
// import animations from "./lib/styles/animations"

// Reset persisted state. DEBUG only.
// persistor.purge()

const AppProviderWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

AppProviderWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default injectSheet({
    // ...animations,
})(AppProviderWrapper)
