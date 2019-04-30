import React from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import Animated from "animated/lib/targets/react-dom"
import withStyles from "@material-ui/core/styles/withStyles"

import styles from "./styles"

class SwipeableCards extends React.PureComponent {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.index && nextProps.initialIndex !== prevState.index) {
            return { index: nextProps.initialIndex }
        }

        return null
    }

    state = {
        index: 0,
        position: new Animated.Value(this.props.initialIndex),
    }

    getTranslate = (inputRange, currentIndex) => this.state.position.interpolate({
        inputRange,
        outputRange: inputRange.map((i) => {
            const fifty = 100 / 2
            return fifty * (i - currentIndex)
        }),
    })

    getScale = (inputRange, currentIndex) => this.state.position.interpolate({
        inputRange,
        outputRange: inputRange.map((i) => {
            const { minScale } = this.props
            return currentIndex === i ? 1 : minScale
        }),
    })

    getOpacity = (inputRange, currentIndex) => this.state.position.interpolate({
        inputRange,
        outputRange: inputRange.map((i) => {
            const { minOpacity } = this.props
            return currentIndex === i ? 1 : minOpacity
        }),
    })

    handleSwitch = (index, type) => {
        this.props.onChange(parseInt(index, 10))

        if (type === "end") {
            Animated.spring(this.state.position, {
                toValue: index,
            }).start()
            return
        }
        this.state.position.setValue(index)
    }

    handleChangeIndex = index => this.setState({
        index,
    })

    renderCards() {
        const { cards, render, classes } = this.props

        const inputRange = cards.map((_, i) => i)

        return cards.map((card, currentIndex) => {
            const total = cards.length
            const scale = total < 2 ? 1 : this.getScale(inputRange, currentIndex)
            const opacity = total < 2 ? 1 : this.getOpacity(inputRange, currentIndex)
            const translateX = total < 2 ? 0 : this.getTranslate(inputRange, currentIndex)

            return (
                <Animated.div
                    key={String(currentIndex)}
                    style={Object.assign({
                        opacity,
                        transform: [{ scale }, { translateX }],
                    })}
                    className={classes.card}
                >
                    {render(card)}
                </Animated.div>
            )
        })
    }

    render() {
        const {
            classes, initialIndex, render, cards, minScale, minOpacity, ...rest
        } = this.props

        return (
            <SwipeableViews
                className={classes.container}
                index={this.state.index}
                onChangeIndex={this.handleChangeIndex}
                onSwitching={this.handleSwitch}
                {...rest}
            >
                {this.renderCards()}
            </SwipeableViews>

        )
    }
}

SwipeableCards.propTypes = {
    minScale: PropTypes.number,
    minOpacity: PropTypes.number,
    render: PropTypes.func.isRequired,
    initialIndex: PropTypes.number,
    onChange: PropTypes.func,
    cards: PropTypes.array,
    classes: PropTypes.object,
}

SwipeableCards.defaultProps = {
    onChange: () => null,
    cards: [],
    classes: {},
    minScale: 0.9,
    minOpacity: 1,
    initialIndex: 0,
}

export default withStyles(styles)(SwipeableCards)
