import React from "react"
import PropTypes from "prop-types"

const Icon = ({
    width, height, title, path, color, className,
}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color}>
        <title id="title">{title}</title>
        {path}
    </svg>
)

Icon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    path: PropTypes.node.isRequired,
}

Icon.defaultProps = {
    width: 24,
    height: 24,
    color: "#000000",
    className: "",
}

export default Icon
