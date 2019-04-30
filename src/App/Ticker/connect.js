import { connect } from "react-redux"

import { createSubscribeAction as suscribeTicker } from "../../redux/reducers/entities/tickers/actions"
import { selectIsConnected, selectisLoading } from "../../redux/reducers/entities/tickers"

const mapStateToProps = state => ({
    isConnected: selectIsConnected(state),
    isLoading: selectisLoading(state),
})

const mapDispatchToProps = {
    suscribeTicker,
}

export default connect(mapStateToProps, mapDispatchToProps)
