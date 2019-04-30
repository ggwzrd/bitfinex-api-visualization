import React from "react"
import get from "lodash/get"

import City from "react-icons/lib/md/location-city"
import Park from "react-icons/lib/md/nature"
import Nature from "react-icons/lib/md/landscape"
import Government from "react-icons/lib/md/account-balance"
import Address from "react-icons/lib/md/business"
import POI from "react-icons/lib/md/place"

const mapResultIcon = (types) => {
    const isCityDistrictOrCounty = types.includes("locality")
        || types.includes("sublocality")
        || types.includes("administrative_area_level_2")

    if (isCityDistrictOrCounty) {
        return <City />
    }

    if (types.includes("park")) {
        return <Park />
    }

    if (types.includes("natural_feature")) {
        return <Nature />
    }

    const isGovernment = types.includes("local_government_office")
        || types.includes("courthouse")
        || types.includes("police")

    if (isGovernment) {
        return <Government />
    }

    if (types.includes("route")) {
        return <Address />
    }

    return <POI />
}

const mapLocation = location => location && ({
    lat: location.lat(),
    lng: location.lng(),
})

const mapZoomValue = (types) => {
    if (types.includes("country")) return 5

    const isStateOrProvince = types.includes("colloquial_area")
        || types.includes("administrative_area_level_1")

    if (isStateOrProvince) return 8

    const isCityTownCountyOrPark = types.includes("locality")
        || types.includes("administrative_area_level_2")
        || types.includes("park")

    if (isCityTownCountyOrPark) return 12

    const isDistrict = types.includes("sublocality")
        || types.includes("sublocality_level_1")

    if (isDistrict) return 13.2

    return 14
}

const mapResults = (results, maxResults) => {
    const mapped = results.map(result => ({
        id: get(result, "id"),
        name: get(result, "name"),
        description: get(result, "formatted_address"),
        location: mapLocation(get(result, "geometry.location")),
        icon: mapResultIcon(get(result, "types")),
        zoom: mapZoomValue(get(result, "types")),
    }))

    return maxResults !== 0
        ? mapped.slice(0, maxResults)
        : mapped
}

const parseResult = (resolve, reject, maxResults = 0, parser = mapResults) => (result, status) => {
    const {
        PlacesServiceStatus: {
            OK,
            UNKNOWN_ERROR,
            ZERO_RESULTS,
            INVALID_REQUEST,
            OVER_QUERY_LIMIT,
        },
        // eslint-disable-next-line no-undef
    } = google.maps.places

    switch (status) {
    case OK:
        resolve(parser(result, maxResults))
        break
    case ZERO_RESULTS:
        resolve([])
        break
    case INVALID_REQUEST:
    case OVER_QUERY_LIMIT:
    case UNKNOWN_ERROR:
        reject(result)
        break
    default:
        reject(null)
    }
}

export const doTextSearch = (service, location, query, maxResults = 0) =>
    new Promise((resolve, reject) => {
        const {
            RankBy: {
                DISTANCE,
            },
            // eslint-disable-next-line no-undef
        } = google.maps.places

        const request = { query }
        if (location) {
            request.location = location
            request.radius = 50000
            request.rankBy = DISTANCE
        }

        service.textSearch(request, parseResult(resolve, reject, maxResults))
    })

export const doCoordinateSearch = (service, coords, radius = 250) =>
    new Promise((resolve, reject) => {
        const {
            RankBy: {
                DISTANCE,
            },
            // eslint-disable-next-line no-undef
        } = google.maps.places

        const request = {
            location: coords,
            radius,
            rankBy: DISTANCE,
        }

        service.nearbySearch(request, parseResult(resolve, reject))
    })

export const reverseGeocode = (service, location) =>
    new Promise((resolve, reject) =>
        service.geocode({ location }, parseResult(
            resolve,
            reject,
            0,
            results => results.map(result => ({
                id: get(result, "place_id"),
                name: get(result, "formatted_address"),
                description: get(result, "formatted_address"),
                location: mapLocation(get(result, "geometry.location")) || location,
                icon: mapResultIcon(get(result, "types")),
                zoom: mapZoomValue(get(result, "types")),
            })),
        )))

export const getUserPosition = () =>
    new Promise((res, rej) => {
        // eslint-disable-next-line no-undef
        if (!navigator.geolocation) {
            rej()
            return
        }

        // eslint-disable-next-line no-undef
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { coords: { latitude: lat, longitude: lng } } = pos
                res({ lat, lng })
            },
            err => rej(err),
        )
    })
