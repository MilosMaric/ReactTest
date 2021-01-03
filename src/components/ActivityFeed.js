import React from 'react';
import "../styles/ActivityFeed.css"

const ActivityFeed = ({activities}) => {
    return (
        <>
            {activities.map(activity => (
                <div key={activity.id} className="activity">
                    <img className="user-avatar" src={activity.user.avatarURL} height={35} width={35} alt="Avatar"/>
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