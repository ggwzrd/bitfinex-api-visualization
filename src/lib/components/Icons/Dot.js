import React from "react"
import Icon from "./Icon"

const title = "Dot"
const path = (<circle id="Dot" fill="currentColor" cx="12" cy="12" r="12" />)

const Dot = props => (
    <Icon {...props} title={title} path={path} />
)

export default Dot
