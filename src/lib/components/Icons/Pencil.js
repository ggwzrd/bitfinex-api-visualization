import React from "react"
import Icon from "./Icon"

const title = "Pencil"
const path = (
    <path d="M12.87,15.07 L10.33,12.56 L10.36,12.53 C12.1,10.59 13.34,8.36 14.07,6 L17,6 L17,4 L10,4 L10,2 L8,2 L8,4 L1,4 L1,6 L12.17,6 C11.5,7.92 10.44,9.75 9,11.35 C8.07,10.32 7.3,9.19 6.69,8 L4.69,8 C5.42,9.63 6.42,11.17 7.67,12.56 L2.58,17.58 L4,19 L9,14 L12.11,17.11 L12.87,15.07 Z M18.5,10 L16.5,10 L12,22 L14,22 L15.12,19 L19.87,19 L21,22 L23,22 L18.5,10 Z M15.88,17 L17.5,12.67 L19.12,17 L15.88,17 Z" id="path-1" />
)

const Pencil = props => (
    <Icon {...props} title={title} path={path} />
)

export default Pencil
