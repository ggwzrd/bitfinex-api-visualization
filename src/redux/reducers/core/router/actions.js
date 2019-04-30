import { push, goBack } from "connected-react-router"

export const createNavigateAction = to => push(to)

export const createGoBackAction = () => goBack()
