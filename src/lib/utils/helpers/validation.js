import get from "lodash/get"

export const isRequired = (translation = "main:field_required") => value =>
    value || typeof value === "number"
        ? undefined
        : translation

export const isValidString = (translation = "main:field_invalid_value") => value =>
    value && (typeof value === "string" && !!value.replace(/\s/g, ""))
        ? undefined
        : translation

export const isRequiredQuill = (translation = "main:field_required") => value =>
    value && value !== "<p><br></p>"
        ? undefined
        : translation

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export const isValidEmail = (translation = "main:email_invalid") => value =>
    value && emailRegex.test(value)
        ? undefined
        : translation

const upperCaseRegex = /[A-Z]/
const lowerCaseRegex = /[a-z]/
const digitRegex = /[0-9]/
const alphanumericRegex = /[^0-9a-zA-Z\d\s:]/

export const isValidPassword = (translation = "main:password_too_weak") => (value) => {
    const hasUpercase = upperCaseRegex.test(value)
    const hasLowerCase = lowerCaseRegex.test(value)
    const hasDigit = digitRegex.test(value)
    const hasAlphaNumeric = alphanumericRegex.test(value)
    const isLongEnough = value && value.length >= 8

    return hasUpercase && hasLowerCase && hasDigit && hasAlphaNumeric && isLongEnough
        ? undefined
        : translation
}

export const maxLength = (max, translation = "main:max_length_exceeded") => value =>
    !value || value.length <= max
        ? undefined
        : `${translation}|max-${max}`

export const minLength = (min, translation = "main:below_min_length") => value =>
    value && value.length >= min
        ? undefined
        : `${translation}|min-${min}`

export const isSameAs = (fieldName, translation = "main:field_value_mismatch") => (value, values) =>
    (value && get(values, fieldName)) && value === get(values, fieldName)
        ? undefined
        : translation

const urlValueRegex = /^(?:(http|ftp|ssh|git)(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$|^(?:[\w]*?):(?!\/\/)[\w\-._~:/?#[\]@!$&'()*+,;=]+$/
const subdomainValueRegex = /^[\w][\w-]{1,61}[\w]$/

export const isValidUrlValue = (translation = "main:field_invalid_url_value") => value =>
    value && urlValueRegex.test(value)
        ? undefined
        : translation

export const isValidSubdomain = (translation = "main:field_invalid_subdomain_value") => value =>
    value && subdomainValueRegex.test(value)
        ? undefined
        : translation

export const parseValidationString = (string) => {
    if (!string || !string.includes("|")) return [string]

    const [translation, argString] = string.split("|")

    const interpolations = argString.split(",")
        .reduce((interpol, arg) => {
            const [name, value] = arg.split("-")
            return { ...interpol, [name]: value }
        }, {})

    return [translation, interpolations]
}
