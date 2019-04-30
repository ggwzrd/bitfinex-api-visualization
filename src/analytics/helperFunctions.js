const helpers = {
    getEditedProfileFields: (ob1, ob2) => {
        const difference = Object.keys(ob2).filter(key =>
            (ob1[key] !== ob2[key] && ([
                "first_name",
                "last_name",
                "phone_number",
                "linkedin_url",
                "skype",
                "description",
            ].indexOf(key) >= 0)))
        return difference
    },
}

export default helpers
