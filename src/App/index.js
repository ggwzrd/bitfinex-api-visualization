import React from 'react'
import flow from "lodash/flow"
import PropTypes from "prop-types"

import withStyles from "@material-ui/core/styles/withStyles"
import Navbar from "../lib/components/Navbar"
import logo from '../logo.svg'

import styles from "./styles"

const App = ({ classes }) => (
    <div className="App">
        <Navbar
            transparent
            title="TITLE"
            backLink="/"
            leftIcon={<img src={logo} className={classes.logo} alt="logo" />}
        />
    </div>
)

App.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
}

export default flow([
    withStyles(styles),
    React.memo,
])(App);
