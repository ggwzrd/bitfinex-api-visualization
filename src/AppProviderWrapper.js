import { AppContainer } from "react-hot-loader"
import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import persistStore from "redux-persist/lib/persistStore"
import { PersistGate } from "redux-persist/integration/react"
import injectSheet from "react-jss"
import smoothscroll from "smoothscroll-polyfill"

import "react-perfect-scrollbar/dist/css/styles.css"

import configureStore from "./redux/configureStore"

import Loading from "./lib/components/Loading/Loading"
import theme from "./ThemeProvider/theme"
import ThemeProvider from "./ThemeProvider"
import animations from "./lib/styles/animations"

// eslint-disable-next-line no-undef,no-underscore-dangle
const initialState = window.__INITIAL_STATE__

const store = configureStore(initialState)
const persistor = persistStore(store)

// kick off the polyfill!
smoothscroll.polyfill()


// Reset persisted state. DEBUG only.
// persistor.purge()

const AppProviderWrapper = ({ children }) => (
    <AppContainer>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    {children}
                </PersistGate>
            </ThemeProvider>
        </Provider>
    </AppContainer>
)

AppProviderWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default injectSheet({
    ...animations,
})(AppProviderWrapper)
