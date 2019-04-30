import psl from "psl"

export const getFullDomain = () =>
    window.location.hostname

const domainRegex = /([a-z-0-9]{2,63}).([a-z.]{2,5})$/

const parseSubDomainLocal = (hostname) => {
    const parts = domainRegex.exec(hostname)

    const sld = parts[1]
    const tld = parts[2]

    // The regex covers sld & tld extraction
    // We need to cut that off the full domain to find the sub
    const removeLength = hostname.length - (sld.length + tld.length + 1)

    return hostname.substring(0, removeLength)
}

export const getSubDomain = () => {
    const fullDomain = getFullDomain()
    const { subdomain } = psl.parse(fullDomain)

    return subdomain || parseSubDomainLocal(fullDomain)
}

/* TODO: Remove the dedupe when back-end finally dedupes their URL's */
export const dedupeUrl = (url) => {
    const secondUrlStart = url && url.lastIndexOf("https://")

    if ((url && url.indexOf("https://")) === secondUrlStart) return url

    return url.substring(secondUrlStart)
}
