import React from "react"
import Paper from "@material-ui/core/Paper"

import IndicatorDots from "./"


export default {
    storyName: "IndicatorDots",
    storyFn() {
        return (
            <Paper style={{ backgroundColor: "#000", height: "50px" }}>
                <IndicatorDots total={10} index={8} />
            </Paper>
        )
    },
}
