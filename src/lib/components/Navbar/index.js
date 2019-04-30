import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Animated from "animated/lib/targets/react-dom"
import classNames from "classnames"

// material-ui
import AppBar from "@material-ui/core/AppBar/AppBar"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import IconButton from "@material-ui/core/IconButton/IconButton"
import Typography from "@material-ui/core/Typography/Typography"
import withStyles from "@material-ui/core/styles/withStyles"

// icons
import { MdArrowBack } from "react-icons/md"

import styles from "./styles"

export const Navbar = ({
    color, classes, transparent, leftIcon, backLink, backFunc, title, rightElement, children, ...rest
}) => (
    <Animated.div className={classes.navigationWrapper}>
        <AppBar
            position="fixed"
            color={color}
            elevation={transparent ? 0 : 2}
            className={classNames(classes.appbar, {
                [classes.transparent]: transparent,
            })}
            {...rest}
        >
            <Toolbar className={classes.toolbar}>
                {backLink && (
                    <IconButton color="inherit" className={classes.leftButton} component={Link} to={backLink}>
                        {leftIcon || <MdArrowBack />}
                    </IconButton>
                )}
                {backFunc && (
                    <IconButton color="inherit" className={classes.leftButton} onClick={backFunc}>
                        {leftIcon || <MdArrowBack />}
                    </IconButton>
                )}
                <Typography type="title" color="inherit" className={classes.title}>
                    {title}
                </Typography>
                {children}
                {rightElement}
            </Toolbar>
        </AppBar>
    </Animated.div>
)

Navbar.propTypes = {
    title: PropTypes.string,
    backLink: PropTypes.string,
    backFunc: PropTypes.func,
    rightElement: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.element,
    ]),
    classes: PropTypes.object,
    transparent: PropTypes.bool,
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "inherit",
        "default",
    ]),
    leftIcon: PropTypes.node,
    children: PropTypes.node,
}

Navbar.defaultProps = {
    title: null,
    backLink: null,
    backFunc: null,
    rightElement: null,
    leftIcon: null,
    children: null,
    transparent: false,
    color: "primary",
    classes: {},
}

export default withStyles(styles)(Navbar)
