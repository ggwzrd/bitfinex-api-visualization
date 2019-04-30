/* Start of tracking set up */
import ReactGA from "react-ga"
import constants from "./constants"

ReactGA.initialize(constants.trackingID)

// Do not send hits to google analytics when on localhost
if (window.location.hostname === "localhost") {
    ReactGA.set({ sendHitTask: null })
}

/* End of tracking set up */
