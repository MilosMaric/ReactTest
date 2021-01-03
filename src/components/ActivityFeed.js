import React from 'react';
import "../styles/ActivityFeed.css"
import {ActivityType} from "../data/ActivityMockData";

const ActivityFeed = ({activities}) => {
    const openModal = () => {
        console.log("Opening modal :)");
    }

    return (
        <>
            <div className="flex-centered" onClick={openModal}>
                <img className="add-activity-button" src="plusIcon.png" alt="Add activity"/>
                Add new activity
            </div>
            {activities.map(activity => (
                <div key={activity.id} className="flex-centered">
                    <img className="user-avatar" src={activity.user.avatarURL} alt="Avatar"/>
                    {`${activity.user.firstName} ${activity.user.lastName} `}
                    {activity.type === ActivityType.NOTE ? "added a note" : activity.type === ActivityType.TASK ? "created a task" : "made a property enquiry"}{": "}
                    {activity.url && <><a href={activity.url}>URL</a>. </>}
                    {activity.note}
                </div>
            ))}
        </>
    )
};

export default ActivityFeed;