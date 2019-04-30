import get from "lodash/get"
import { change, getFormValues } from "redux-form"

import constants from "../../../constants/internal"

export const addFilesToFormField = (formName, fieldName, files) =>
    (dispatch, getState) => {
        const values = getFormValues(formName)(getState())

        if (!values) return

        const field = get(values, fieldName, { textHtml: "", attachments: [] })
        const { textHtml, attachments: current } = field

        const applicableFiles = current
            ? files.filter(({ hash: fileHash }) =>
                current.every(({ data: { hash } }) => hash !== fileHash))
            : files

        const attachments = [
            ...(current || []),
            ...applicableFiles.map(({ hash, name }) => ({
                type: constants.attachmentTypes.FILE,
                data: {
                    hash,
                    name,
                },
            })),
        ]

        dispatch(change(formName, fieldName, { textHtml, attachments }))
    }

export default addFilesToFormField
