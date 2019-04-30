import "core-js/stable"
import "regenerator-runtime/runtime"
import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ConnectedRouter } from "connected-react-router"
import Route from "react-router-dom/Route"
import smoothscroll from "smoothscroll-polyfill"

import registerServiceWorker from "./registerServiceWorker"
import AppProviderWrapper from "./AppProviderWrapper"
import App from "./App/index"
import { history } from "./redux/reducers"

import "./index.css"

smoothscroll.polyfill()
if (!window.MediaStream) window.MediaStream = () => null

if (process.env.REACT_APP_ENV === "prod" && window.Raven) {
    window.Raven.config("https://9f03991b709244a68b52b74d84f48a00@sentry.io/1250611", {
        release: "1.2.0",
        environment: "production",
    }).install()
}

ReactDOM.render(
    (
        <AppProviderWrapper>
            <div className="App">
                <CssBaseline />
                <ConnectedRouter history={history}>
                    <Route component={App} />
                </ConnectedRouter>
            </div>
        </AppProviderWrapper>
    ),
    // eslint-disable-next-line no-undef
    document.getElementById("root"),
)

registerServiceWorker()
