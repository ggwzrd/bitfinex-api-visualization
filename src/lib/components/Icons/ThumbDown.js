import React from "react"
import Icon from "./Icon"

const title = "Thumb Down"
const path = (<path
    d="M5,15 L1,15 C0.447,15 0,14.552 0,14 L0,4 C0,3.448 0.447,3 1,3 L5,3 C5.553,3 6,3.448 6,4 L6,14 C6,14.552 5.553,15 5,15 Z M22.768,15.641 C22.578,15.868 22.297,16 22,16 L16,16 L16,20 C16,20.552 15.553,21 15,21 L12,21 C11.6,21 11.238,20.762 11.081,20.395 L8,14 L8,4.522 L11.629,3.071 C11.746,3.024 11.873,3 12,3 L20,3 C20.483,3 20.897,3.346 20.984,3.821 L22.984,14.821 C23.037,15.113 22.957,15.413 22.768,15.641 Z"
/>)

const ThumbDown = props => (
    <Icon {...props} title={title} path={path} />
)

export default ThumbDown
