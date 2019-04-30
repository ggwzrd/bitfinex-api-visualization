
const constants = {
    oldPlayerUrl: "https://appicalnow.com/",
    baseUrl: process.env.REACT_APP_ENV === "prod" ? "https://appicalnow.com/api/" : "https://newrelease.appicalnow.com/api/",

    pageTypes: {
        text: 1,
        image: 2,
        imageText: 3,
        video: 4,
        score: 5,
        embed: 6,
        social: 7,
        essay: 8,
        photoEssay: 9,
        likert: 10,
        ar: 11,
        record: 12,
        infospots: 13,
        multipleChoice: 14,
        multipleChoiceImage: 15,
        ranking: 16,
        assign: 17,
        orderImage: 18,
        orderVideo: 19,
    },

    pageModules: {
        text: 1,
        image: 2,
        textWithImage: 3,
        video: 4,
        embed: 5,
        multipleChoice: 6,
        infoSpot: 7,
        multipleChoiceImage: 8,
        photoEssay: 9,
        essay: 10,
        likert: 11,
        score: 12,
        assign: 13,
        order: 14,
    },

    answerStatus: {
        correct: 1,
        incorrect: 2,
        neutral: 3,
    },
}

export default constants
