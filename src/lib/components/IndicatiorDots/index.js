import React from "react"
import PropTypes from "prop-types"
import Animated from "animated/lib/targets/react-dom"

import withStyles from "@material-ui/core/styles/withStyles"

import Dot from "../Icons/Dot"
import styles from "./styles"

class IndicatorDots extends React.PureComponent {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.total > 4) {
            prevState.position.setValue(nextProps.index)
            return { position: prevState.position }
        }

        return null
    }

    state = {
        position: new Animated.Value(this.props.index),
    }

    getScale = (inputRange, currentIndex) => this.state.position.interpolate({
        inputRange,
        outputRange: inputRange.map((i) => {
            const diff = inputRange.length <= 4 ? 1 : Math.abs(currentIndex - i)
            let size = diff

            if (inputRange.length > 4) {
                const dist = Math.abs(this.props.index - currentIndex)
                const isEnd = this.props.index === 0 || this.props.index === inputRange.length - 1
                size = (isEnd && dist < 3) ? 1 : size
                size = isEnd && dist === 3 ? 2 : size
                size = isEnd && dist === 4 ? 3 : size
            }

            switch (size) {
            case 0:
            case 1: return 1
            case 2: return 0.7
            case 3: return 0.5
            // case 4: return 5
            default: return 0
            }
        }),
    })

    getTranslate = (inputRange, currentIndex) => this.state.position.interpolate({
        inputRange,
        outputRange: inputRange.map((i) => {
            const size = 10
            return size * (currentIndex - i)
        }),
    })

    render() {
        const {
            classes, total, index,
        } = this.props

        const range = Array.from(Array(total).keys())

        return (
            <div className={classes.container}>
                {
                    range.map((currentIndex) => {
                        const scale = total < 2 ? 1 : this.getScale(range, currentIndex)
                        const translateX = total < 2 ? 0 : this.getTranslate(range, currentIndex)
                        const opacity = index === currentIndex ? 1 : 0.5

                        return (
                            <Animated.div
                                key={String(currentIndex)}
                                style={Object.assign({
                                    opacity,
                                    transform: [
                                        { translateY: "-50%" },
                                        { translateX },
                                        { scale },
                                    ],
                                })}
                                className={classes.dotContainer}
                            >
                                <Dot className={classes.dot} />
                            </Animated.div>
                        )
                    })
                }
            </div>
        )
    }
}

IndicatorDots.propTypes = {
    classes: PropTypes.object,
    total: PropTypes.number,
    index: PropTypes.number,
}

IndicatorDots.defaultProps = {
    classes: {},
    total: 1,
    index: 0,
}

export default withStyles(styles, { withTheme: true })(IndicatorDots)
