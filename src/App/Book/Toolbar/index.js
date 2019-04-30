import React from "react"
import PropTypes from "prop-types"
import flow from "lodash/flow"

import withStyles from "@material-ui/core/styles/withStyles"
import MuiToolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

// import styles from "./styles"

const Toolbar = ({ classes }) => (
    <MuiToolbar className={classes.root}>
        <div className={classes.title}>
            <Typography variant="h6" id="tableTitle">
                Nutrition
            </Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
            
        </div>
    </MuiToolbar>
)

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
}
Toolbar.defaultProps = {
    // add here the default props
}

export default flow([
    withStyles({}),
])(Toolbar)

