import React from "react"

import { fileType } from "../../../constants/enums"

import Excel from "../../views/Icons/FileTypes/Excel"
import PDF from "../../views/Icons/FileTypes/PDF"
import Image from "../../views/Icons/FileTypes/Image"
import PNG from "../../views/Icons/FileTypes/PNG"
import Word from "../../views/Icons/FileTypes/Word"
import Text from "../../views/Icons/FileTypes/Text"
import Video from "../../views/Icons/FileTypes/Video"
import Unknown from "../../views/Icons/FileTypes/Unknown"

export const extractFileExtension = fileName =>
    (fileName || "").substring((fileName || "").lastIndexOf(".") + 1).toLowerCase()

export const getFileIcon = (fileName, className = null) => {
    const extension = extractFileExtension(fileName)

    switch (extension) {
    case "xls":
    case "xlsx":
        return <Excel className={className} />

    case "pdf":
        return <PDF className={className} />

    case "jpg":
    case "tiff":
    case "gif":
        return <Image className={className} />

    case "png":
        return <PNG className={className} />

    case "doc":
    case "docx":
        return <Word className={className} />

    case "txt":
        return <Text className={className} />

    case "mp4":
    case "mkv":
    case "mov":
    case "avi":
        return <Video className={className} />

    default:
        return <Unknown className={className} />
    }
}

export const makeFileName = (name, extension) =>
    `${(name || "").replace(/[ ,.!?()*&^%$#/\\:;|{}]/g, "-").replace("--", "-")}.${extension}`.toLowerCase()

export const findFileTypeFromMime = (mimeType) => {
    switch (mimeType) {
    case "text/plain":
    case "text/html":
    case "application/pdf":
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    case "application/vnd.ms-powerpoint":
    case "application/msword":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    case "application/vnd.oasis.opendocument.text":
    case "application/vnd.oasis.opendocument.spreadsheet":
    case "application/vnd.oasis.opendocument.presentation":
    case "application/vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return fileType.document
    case "image/jpeg":
    case "image/png":
    case "image/gif":
    case "image/svg+xml":
    case "image/bmp":
    case "image/webp":
    case "image/tiff":
        return fileType.image
    case "video/mp4":
    case "video/mpeg":
    case "video/webm":
    case "video/ogg":
    case "video/x-msvideo":
    case "video/3gpp":
    case "video/3gpp2":
        return fileType.video
    default:
        return fileType.other
    }
}

export default getFileIcon
