export const ActivitiesModel = {
    users: [
        {id: 1, firstName: "Michael", lastName: "Jordan", avatarURL: "./defaultAvatar.png"},
        {id: 2, firstName: "James", lastName: "Bond", avatarURL: "./defaultAvatar.png"}
    ],
    activities: [
        {id: 1, type: "Note", url: "www.google.com", note: "some note", userId: 1},
        {id: 2, type: "Property enquiry", url: "www.yahoo.com", note: "some note 2", userId: 1},
        {id: 3, type: "Task", url: "", note: "some note 3", userId: 2}
    ]
}