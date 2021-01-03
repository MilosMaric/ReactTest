import React, {useState} from 'react';
import "../styles/ActivityFeed.css"
import {ActivitiesModel} from "../data/ActivityMockData";

const ActivityFeed = ({initialActivities}) => {
    const [activities, setActivities] = useState(initialActivities);
    //TODO: Add test for activity adding.
    const addActivity = () => {
        const nextId = activities.map(a => a.id).sort((a, b) => a - b).pop() + 1;
        setActivities([
            {
                id: nextId,
                type: "Note",
                url: "www.google.com",
                note: `Note ${nextId}`,
                user: ActivitiesModel.users.filter(u => u.id === 1).pop()
            },
            ...activities])
    }

    return (
        <>
            <div className="flex-centered" onClick={addActivity}>
                <img className="add-activity-button" src="plusIcon.png" alt="Add activity"/>
                Add new activity
            </div>
            {activities.map(activity => (
                <div key={activity.id} className="flex-centered">
                    <img className="user-avatar" src={activity.user.avatarURL} alt="Avatar"/>
                    {`${activity.user.firstName} ${activity.user.lastName} `}
                    {activity.type === "Note" ? "added a note" : activity.type === "Task" ? "created a task" : "made a property enquiry"}{": "}
                    {activity.url && <><a href={activity.url}>URL</a>. </>}
                    {activity.note}
                </div>
            ))}
        </>
    )
};

export default ActivityFeed;