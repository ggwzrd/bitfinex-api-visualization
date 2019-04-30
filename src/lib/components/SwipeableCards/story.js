import React, { Fragment } from "react"

import Paper from "@material-ui/core/Paper"
import SwipeableCards from "./"
import CardChapter from "../CardChapter"
import CardStory from "../CardStory"

const cards = [
    {
        id: 1,
        title: "Foo Bar 1",
        progress: 10,
        available: true,
    },
    {
        id: 2,
        title: "Foo Bar 2",
        progress: 20,
        available: true,
    },
    {
        id: 3,
        title: "Foo Bar 3",
        progress: 30,
        available: true,
    },
    {
        id: 4,
        title: "Foo Bar 4",
        progress: 40,
        available: true,
    },
    {
        id: 5,
        title: "Foo Bar 5",
        progress: 50,
        available: true,
    },
]

const style = {
    chapter: {
        width: "100%", maxWidth: "385px", backgroundColor: "#000", marginTop: "32px",
    },
    story: {
        width: "100%", maxWidth: "450px", backgroundColor: "#000", marginTop: "32px",
    },
}
export default {
    storyName: "SwipeableCards",
    storyFn() {
        return (
            <Fragment>
                <Paper style={style.chapter}>
                    <SwipeableCards
                        cards={cards}
                        render={chapter => (
                            <CardChapter
                                chapter={chapter}
                            />
                        )}
                        slideStyle={{ overflow: "visible" }}
                    />
                </Paper>
                <Paper style={style.story}>
                    <SwipeableCards
                        cards={cards}
                        render={story => (
                            <CardStory
                                story={story}
                            />
                        )}
                        slideStyle={{ overflow: "visible" }}
                    />
                </Paper>
            </Fragment>
        )
    },
}
