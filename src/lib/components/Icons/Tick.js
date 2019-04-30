import React from "react"
import Icon from "./Icon"

const title = "Tick"
const path = (<polygon id="path-1" points="10.9655119 18 5 11.8888889 6.68227435 10.1655556 10.9655119 14.5411111 18.3507457 7 20 8.76679145" />)

const Tick = props => (
    <Icon {...props} title={title} path={path} />
)

export default Tick
