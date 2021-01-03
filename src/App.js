import React, {useState} from "react";
import ActivityFeed from "./components/ActivityFeed";
import {ActivitiesModel} from "./data/ActivityMockData";
import NewActivityForm from "./components/NewActivityForm";
import './App.css';

const initialActivities = [...ActivitiesModel.activities].map(a => {
    a.user = ActivitiesModel.users.filter(u => u.id === a.userId)[0];
    return a;
})

function App() {
    const [activities, setActivities] = useState(initialActivities);
    const addNewActivity = (newActivity) => {
        const id = activities.map(a => a.id).sort((a, b) => a - b).pop() + 1;
        setActivities([
            {...newActivity, id, user: ActivitiesModel.users.filter(u => u.id === 1).pop()},
            ...activities
        ])
    }

    return (
        <>
            <NewActivityForm handleSubmit={addNewActivity}/>
            <ActivityFeed activities={activities}/>
        </>
    );
}

export default App;
