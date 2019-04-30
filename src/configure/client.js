import axios from "axios"
import constants from "../constants"

export const configureClient = baseURL => axios.create({
    baseURL,
    responseType: "json",

    headers: {
        common: {
            Accept: "application/json",
        },
    },
})

export default configureClient(constants.baseUrl)
