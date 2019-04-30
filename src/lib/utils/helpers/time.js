import moment from "moment"

import constants from "../../../constants"

export const calculateHours = (days, beforeAfter) => {
    const multiplier = beforeAfter === constants.internal.BEFORE_EVENT
        ? -24
        : 24

    return Math.round(days * multiplier)
}

export const humanTimeDifference = (t, date) => {
    const diff = moment().diff(moment.utc(date))
    const duration = moment.duration(diff)

    const minutes = Math.round(duration.asMinutes())
    const hours = Math.round(duration.asHours())
    const days = Math.round(duration.asDays())
    const years = Math.round(duration.asYears())

    if (minutes < 10) {
        return t("main:just_now")
    }

    if (minutes < 50) {
        return t("main:minutes_ago", { minutes })
    }

    if (minutes < 90) {
        return t("main:about_hour_ago")
    }

    if (hours < 18) {
        return t("main:hours_ago", { hours })
    }

    if (hours < 36) {
        return t("main:about_day_ago")
    }

    if (days < 350) {
        return t("main:days_ago", { days })
    }

    if (days < 548) {
        return t("main:about_year_ago")
    }

    return t("main:years_ago", { years })
}
