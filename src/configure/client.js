/* eslint-disable no-undef */
import constants from "../constants"

export const configureClient = baseURL => new WebSocket(baseURL)
export default configureClient(constants.baseUrl)
