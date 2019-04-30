import React from "react"
import Icon from "./Icon"

const title = "Shrink"
const path = (<path d="M18,10 L18,11 L13,11 L13,6 L14,6 L14,9 L17,6 L18,7 L15,10 L18,10 Z M6,14 L6,13 L11,13 L11,18 L10,18 L10,15 L7,18 L6,17 L9,14 L6,14 Z" />)

const Shrink = props => (
    <Icon {...props} title={title} path={path} />
)

export default Shrink
