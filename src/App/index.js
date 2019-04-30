import React from "react"
import flow from "lodash/flow"
import PropTypes from "prop-types"

import withStyles from "@material-ui/core/styles/withStyles"
import Navbar from "../lib/components/Navbar"
import Book from "./Book"

// import logo from "../logo.svg"

import styles from "./styles"

const App = ({ classes }) => (
    <div className={classes.root}>
        <Navbar
            title="BITFINEX"
            // leftIcon={<img src={logo} className={classes.logo} alt="logo" />}
        />
        <Book />
    </div>
)

App.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default flow([
    withStyles(styles),
    React.memo,
])(App)
