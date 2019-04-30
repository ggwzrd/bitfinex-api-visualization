import React, { useEffect } from "react"
import PropTypes from "prop-types"
import flow from "lodash/flow"
import classNames from "classnames"

import withStyles from "@material-ui/core/styles/withStyles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import Loading from "../../lib/components/Loading/Loading"

import connect from "./connect"
import styles from "./styles"

const Book = ({
    classes, subscribeOrderBook, isConnected, bids, asks, isLoading,
}) => {
    useEffect(() => {
        if (!isConnected) subscribeOrderBook()
    }, [isConnected])

    return (
        <Paper className={classes.root}>
            <div className={classes.tables}>
                {isLoading
                    ? <Loading size={50} />
                    : (
                        <React.Fragment>
                            <Table className={classes.bidsTable}>
                                <TableHead>
                                    <TableRow className={classes.row}>
                                        <TableCell className={classNames(classes.cell, classes.head)} align="right">Count</TableCell>
                                        <TableCell className={classNames(classes.cell, classes.head)} align="right">Amount</TableCell>
                                        <TableCell className={classNames(classes.cell, classes.head)} align="right">Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bids.map(bid => (
                                        <TableRow className={classes.row} key={bid.price}>
                                            <TableCell className={classes.cell} align="right">{bid.count}</TableCell>
                                            <TableCell className={classes.cell} align="right">{bid.amount}</TableCell>
                                            <TableCell className={classes.cell} align="right">{bid.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Table className={classes.bidsTable}>
                                <TableHead>
                                    <TableRow className={classes.row}>
                                        <TableCell className={classNames(classes.cell, classes.head)} align="right">Price</TableCell>
                                        <TableCell className={classNames(classes.cell, classes.head)} align="right">Amount</TableCell>
                                        <TableCell className={classNames(classes.cell, classes.head)} align="right">Count</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {asks.map(ask => (
                                        <TableRow className={classes.row} key={ask.price}>
                                            <TableCell className={classes.cell} align="right">{ask.price}</TableCell>
                                            <TableCell className={classes.cell} align="right">{ask.amount}</TableCell>
                                            <TableCell className={classes.cell} align="right">{ask.count}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </React.Fragment>
                    )
                }
            </div>
            <div className={classes.status}>
                <Typography variant="caption" color="inherit">{isConnected ? "Connected" : "Disconnected"}</Typography>
            </div>
        </Paper>
    )
}

Book.propTypes = {
    classes: PropTypes.object.isRequired,
    subscribeOrderBook: PropTypes.func.isRequired,
    bids: PropTypes.array,
    asks: PropTypes.array,
    isConnected: PropTypes.bool,
    isLoading: PropTypes.bool,
}
Book.defaultProps = {
    isConnected: false,
    isLoading: false,
    bids: [],
    asks: [],
}

export default flow([
    withStyles(styles),
    connect,
    React.memo,
])(Book)
