const getPage = (page) => {
    const tests = {
        loginScreen: /^\/login$/,
        recoverPasswordScreen: /^\/reset-password$/,
        courseListScreen: /^\/courses$/,
        checkinTabScreen: /^\/courses\/[0-9]*\/dashboard$/,
        journeyTabScreen: /^\/courses\/[0-9]*\/journey$/,
        knowledgeTabScreen: /^\/courses\/[0-9]*\/knowledge/,
        storiesScreen: /^\/courses\/[0-9]*\/stories/,
        userProfileScreen: /^\/courses\/[0-9]*\/profile(\/view)?$/,
        editUserScreen: /^\/courses\/[0-9]*\/profile\/edit$/,
        languageScreen: /^\/courses\/[0-9]*\/profile\/language$/,
        favouritesScreen: /^\/courses\/[0-9]*\/profile\/favourites$/,
    }

    const screen = Object.keys(tests).find(key => (
        tests[key].test(page)
    ))

    return screen || page
}

export default getPage
