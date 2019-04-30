const constants = {
    trackingID: process.env.REACT_APP_ENV === "prod" ? "UA-29133681-11" : "UA-29133681-12",

    // getPage function will decide which page view to send to analytics
    // Commented properties have not been set up for tracking yet, but are on mobile
    pageViews: {
        loginScreen: "login_screen",
        // ssoScreen: "sso_screen",
        recoverPasswordScreen: "recover_password_screen",
        courseListScreen: "course_list",
        checkinTabScreen: "checkin_tab",
        journeyTabScreen: "journey_tab",
        knowledgeTabScreen: "knowledge_tab",
        // yourAccountScreen: "your_account",
        userProfileScreen: "user_profile",
        editUserScreen: "edit_user_profile",
        languageScreen: "language_selector",
        // peopleFinderScreen: "people_finder",
        // knowledgeListScreen: "knowledge_list",
        // knowledgeItemDetailScreen: "knowledge_item_detail",

        // The below properties are not currently being tracked on mobile
        storiesScreen: "story",
        favouritesScreen: "user_favourites",
    },

    // Event Action Names are stored here
    // Commented properties have not been set up for tracking yet, but are on mobile
    events: {
        openedChapter: "Opened_chapter",
        finishedChapter: "Finished_chapter",
        openedStory: "Opened_story",
        openedWelcomeVideo: "Opened_video_welcome_message",
        checkedChecklistItem: "Checked_checklist_item",
        uncheckedChecklistItem: "Unchecked_checklist_item",
        pressedInfoSpot: "Pressed_info_spot",
        favoritedPage: "Favorited_page",
        unfavoritedPage: "Unfavorited_page",
        //
        openedKnowledgeItem: "Opened_knowledge_item",
        //
        openedEditProfile: "Opened_edit_profile",
        edited_first_name: "Edited_first_name",
        edited_last_name: "Edited_last_name",
        edited_phone_number: "Edited_phone_number",
        edited_linkedin_url: "Edited_LinkedIn",
        edited_skype: "Edited_Skype",
        edited_description: "Edited_bio",
        // editedProfilePicture: "Edited_profile_picture",
        // editedJobTitle: "Edited_job_title",
        // editedDepartment: "Edited_department",
        //
        calledColleague: "Called_a_colleague",
        emailedColleague: "Emailed_a_colleague",
        facebookColleague: "Checked_Facebook_of_colleague",
        instagramColleague: "Checked_Instagram_of_colleague",
        linkedInColleague: "Checked_LinkedIn_of_colleague",
        skypeColleague: "Checked_Skype_of_colleague",
        twitterColleague: "Checked_Twitter_of_colleague",
        //
        openedMoreCoursesList: "Opened_more_courses_list",
        recoveredPassword: "Recovered_a_password",
        selectedCourse: "Selected_a_course",
        loggedOut: "Logged_out",
        //
        // pressedProgressGauge: "Pressed_progress_gauge",
        //
        // showedPrivacyPopup: "Showed_privacy_popup",
        // acceptedPrivacyPopup: "Accepted_privacy_popup",
        // loggedOutFromPrivacyPopup: "Logged_out_from_privacy_popup",

        // The below properties are not currently being tracked on mobile
        switchToOldPlayer: "Switched_to_old_player",
        finishedStory: "Finished_story",
    },

    categories: {
        user: "User",
        story: "Story",
        chapter: "Chapter",
        checklist: "Checklist",
        courses: "Courses",
        knowledge: "Knowledge",
        colleagues: "Colleagues",
    },
}

export default constants
