import { create } from "jss"
import extend from "jss-extend"
import { jssPreset } from "@material-ui/core/styles/index"


const configureJss = () => create({
    plugins: [
        ...jssPreset().plugins,
        extend(),
    ],
})

export default configureJss
