import React from "react"
import PropTypes from "prop-types"
import flow from "lodash/flow"
import ClassNames from "classnames"
import Lottie from "react-lottie"

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles"

import animationData from "../../lotties/loading"

import styles from "./styles"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
}

const Loading = ({
    classes, className, loading, transparent, size, options,
}) => (
    <div className={ClassNames(classes.root, className, loading ? "loading" : "", transparent ? "transparent" : "")}>
        <Lottie
            options={options}
            height={size}
            width={size}
        />
    </div>
)

Loading.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    options: PropTypes.object,
    /* set loading to false to hide the component without removing it from the DOM */
    loading: PropTypes.bool,
    transparent: PropTypes.bool,
}

Loading.defaultProps = {
    className: null,
    loading: true,
    transparent: false,
    size: 250,
    options: defaultOptions,
}

export default flow([
    withStyles(styles),
    React.memo,
])(Loading)
