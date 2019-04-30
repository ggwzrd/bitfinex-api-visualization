import { connect } from "react-redux"

import { createSubscribeAction as subscribeOrderBook } from "../../redux/reducers/entities/orders/actions"
import {
    selectBids, selectAsks, selectIsConnected, selectisLoading,
} from "../../redux/reducers/entities/orders"

const mapStateToProps = state => ({
    bids: selectBids(state),
    asks: selectAsks(state),
    isConnected: selectIsConnected(state),
    isLoading: selectisLoading(state),
})

const mapDispatchToProps = {
    subscribeOrderBook,
}

export default connect(mapStateToProps, mapDispatchToProps)
