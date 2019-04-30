// eslint-disable-next-line no-undef
export const hasCredentialMgmt = !!window.PasswordCredential

let credentialConstructor = null

export const setCurrentCredentialData = (email, password = null, displayName = null, avatarUrl = null) => {
    if (email) credentialConstructor = { id: email }

    if (!credentialConstructor) return

    if (password) credentialConstructor.password = password
    if (displayName) credentialConstructor.name = displayName
    if (avatarUrl) credentialConstructor.iconUrl = avatarUrl
}

export const storeCurrentCredentials = () => {
    if (!credentialConstructor) return

    // eslint-disable-next-line no-undef
    const credential = new PasswordCredential(credentialConstructor)
    credentialConstructor = null

    // eslint-disable-next-line no-undef
    navigator.credentials.store(credential)
}

export const askCredentials = () =>
    // eslint-disable-next-line no-undef
    navigator.credentials.get({ password: true, mediation: "optional" })
        .then((credential) => {
            if (!credential) return null

            return {
                username: credential.id,
                password: credential.password,
            }
        })

export const preventAccess = () =>
    // eslint-disable-next-line no-undef
    navigator.credentials.preventSilentAccess()
