import React from 'react';
import "../styles/ActivityFeed.css"
import {ActivityType} from "../data/ActivityMockData";

const ActivityFeed = ({activities, openModal}) => {
    return (
        <>
            <div className="flex-centered add-activity-button-container" onClick={openModal}>
                <img className="add-activity-button" src="plusIcon.png" alt="Add activity"/>
                Add new activity
            </div>
            <div className='activities-table'>
                {activities.map(activity => (
                    <div key={activity.id} className="flex-centered activity-item">
                        <img className="user-avatar" src={activity.user.avatarURL} alt="Avatar"/>
                        {`${activity.user.firstName} ${activity.user.lastName} `}
                        {activity.type === ActivityType.NOTE ? "added a note" : activity.type === ActivityType.TASK ? "created a task" : "made a property enquiry"}{": "}
                        {activity.url && <><a href={activity.url}>URL</a>. </>}
                        {activity.note}
                    </div>
                ))}
            </div>
        </>
    )
};

export default ActivityFeed;