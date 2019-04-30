import React, { Component } from "react"
import ReactGA from "react-ga"
import constants from "./constants"

const eventTracker = (WrappedComponent) => {
    const EventTracker = class extends Component {
        trackEvent(category, action) {
            ReactGA.event({
                category: constants.categories[category],
                action: constants.events[action],
            })
        }

        render() {
            return <WrappedComponent trackEvent={this.trackEvent} {...this.props} />
        }
    }

    return EventTracker
}

export default eventTracker
