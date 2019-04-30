import React from "react"
import Icon from "./Icon"

const title = "Thumb Up"
const path = (<path
    d="M5,9 C5.553,9 6,9.448 6,10 L6,20 C6,20.552 5.553,21 5,21 L1,21 C0.447,21 0,20.552 0,20 L0,10 C0,9.448 0.447,9 1,9 L5,9 Z M22.768,8.359 C22.957,8.587 23.037,8.887 22.984,9.179 L20.984,20.179 C20.897,20.654 20.483,21 20,21 L12,21 C11.873,21 11.746,20.976 11.629,20.929 L8,19.478 L8,10 L11.081,3.605 C11.238,3.238 11.6,3 12,3 L15,3 C15.553,3 16,3.448 16,4 L16,8 L22,8 C22.297,8 22.578,8.132 22.768,8.359 Z"
/>)

const ThumbUp = props => (
    <Icon {...props} title={title} path={path} />
)

export default ThumbUp
