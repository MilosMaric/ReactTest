export const ActivityType = {
    NOTE: 'NOTE',
    TASK: 'TASK',
    ENQUIRY: 'ENQUIRY'
}

export const ActivitiesModel = {
    users: [
        {id: 1, firstName: "Michael", lastName: "Jordan", avatarURL: "./defaultAvatar.png"},
        {id: 2, firstName: "James", lastName: "Bond", avatarURL: "./defaultAvatar.png"}
    ],
    activities: [
        {id: 1, type: ActivityType.NOTE, url: "www.google.com", note: "some note", userId: 1},
        {id: 2, type: ActivityType.ENQUIRY, url: "www.yahoo.com", note: "some note 2", userId: 1},
        {id: 3, type: ActivityType.TASK, url: "", note: "some note 3", userId: 2}
    ]
}