import get from "lodash/get"
import map from "lodash/map"

import { attachmentTypes } from "../../../../constants/internal"

export const createRequestValues = (name, message, attachments = []) => {
    const location = attachments && attachments
        .find(att => att.type === attachmentTypes.LOCATION)
    const files = attachments && attachments
        .filter(att => att.type === attachmentTypes.FILE)

    return {
        name,
        message,
        location: location ? {
            latitude: get(location, "data.location.lat"),
            longitude: get(location, "data.location.lng"),
            placeName: get(location, "data.name"),
            description: get(location, "data.description"),
        } : undefined,
        attachments: map(files, ({ data: { hash, ...rest } }) => ({
            fileHash: hash,
            ...rest,
        })),
    }
}

const mapAttachments = attachments =>
    attachments.map(({ fileHash: hash, name }) => ({
        type: attachmentTypes.FILE,
        data: { hash, name },
    }))

export const createFormValues = ({
    name, text, attachments, location,
}) => ({
    name,
    content: {
        textHtml: text,
        attachments: location
            ? [
                ...mapAttachments(attachments),
                {
                    type: attachmentTypes.LOCATION,
                    data: {
                        name: get(location, "placeName"),
                        description: get(location, "description"),
                        location: {
                            lat: get(location, "longitude"),
                            lng: get(location, "latitude"),
                        },
                    },
                },
            ]
            : mapAttachments(attachments),
    },
})
