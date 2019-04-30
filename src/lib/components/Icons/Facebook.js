import React from "react"
import Icon from "./Icon"

const title = "Facebook"
const path = (<path
    d="M17,3 L17,6.6 L15.2,6.6 C14.579,6.6 14.3,7.329 14.3,7.95 L14.3,10.2 L17,10.2 L17,13.8 L14.3,13.8 L14.3,21 L10.7,21 L10.7,13.8 L8,13.8 L8,10.2 L10.7,10.2 L10.7,6.6 C10.7,4.6117749 12.3117749,3 14.3,3 L17,3 Z"
/>)

const Facebook = props => (
    <Icon {...props} title={title} path={path} />
)

export default Facebook
