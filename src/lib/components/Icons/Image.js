import React from "react"
import Icon from "./Icon"

const title = "Image"
const path = (<path
    d="M22.5,0 L1.5,0 C0.6705,0 0,0.672 0,1.5 L0,22.5 C0,23.328 0.6705,24 1.5,24 L22.5,24 C23.3295,24 24,23.328 24,22.5 L24,1.5 C24,0.672 23.3295,0 22.5,0 Z M3.6,20.4 L8.4,14.4 L10.8,16.8 L14.4,10.8 L20.4255189,20.3977914 L3.6,20.4 Z M7.8,4.8 C9.456,4.8 10.8,6.1425 10.8,7.8 C10.8,9.459 9.456,10.8 7.8,10.8 C6.141,10.8 4.8,9.459 4.8,7.8 C4.8,6.1425 6.141,4.8 7.8,4.8 Z"
/>)

const Image = props => (
    <Icon {...props} title={title} path={path} />
)

export default Image
