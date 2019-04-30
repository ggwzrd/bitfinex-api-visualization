import React, { useEffect } from "react"
import PropTypes from "prop-types"
import flow from "lodash/flow"

import withStyles from "@material-ui/core/styles/withStyles"
import Paper from "@material-ui/core/Paper"

// import styles from "./styles"
import connect from "./connect"

const Ticker = ({
    classes, isConnected, isLoading, suscribeTicker,
}) => {
    useEffect(() => {
        // if (!isConnected && !isLoading) suscribeTicker()
    }, [isConnected, isLoading, suscribeTicker])

    return (
        <Paper className={classes.root}>
            <span />
        </Paper>
    )
}

Ticker.propTypes = {
    classes: PropTypes.object.isRequired,
    suscribeTicker: PropTypes.func.isRequired,
    isConnected: PropTypes.bool,
    isLoading: PropTypes.bool,
}
Ticker.defaultProps = {
    isConnected: false,
    isLoading: false,
}

export default flow([
    withStyles({}),
    connect,
    React.memo,
])(Ticker)
