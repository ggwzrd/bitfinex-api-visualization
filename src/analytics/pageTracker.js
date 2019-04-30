import React, { Component } from "react"
import ReactGA from "react-ga"
import constants from "./constants"
import getPage from "./getPage"

const pageTracker = (WrappedComponent) => {
    const trackPage = (page) => {
        const title = constants.pageViews[getPage(page)]
        if (title) ReactGA.pageview(page, [], title)
        else console.log("Analytics: Unknown page view", page)
    }

    const HOC = class extends Component {
        componentDidMount() {
            const page = this.props.location.pathname
            trackPage(page)
        }

        componentWillReceiveProps(nextProps) {
            const currentPage = getPage(this.props.location.pathname)
            const nextPage = getPage(nextProps.location.pathname)

            if (currentPage !== nextPage) {
                trackPage(nextProps.location.pathname)
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return HOC
}

export default pageTracker
