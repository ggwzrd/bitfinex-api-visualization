import React from "react"
import Icon from "./Icon"

const title = "Expand"
const path = (<path d="M12,8 L12,7 L17,7 L17,12 L16,12 L16,9 L13,12 L12,11 L15,8 L12,8 Z M12,16 L12,17 L7,17 L7,12 L8,12 L8,15 L11,12 L12,13 L9,16 L12,16 Z" />)

const Expand = props => (
    <Icon {...props} title={title} path={path} />
)

export default Expand
