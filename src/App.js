import React, {useState} from "react";
import ActivityFeed from "./components/ActivityFeed";
import {ActivitiesModel} from "./data/ActivityMockData";
import NewActivityForm from "./components/NewActivityForm";
import './App.css';
import {connect} from "react-redux";
import {decrement, increment} from "./actions/actions";

const initialActivities = [...ActivitiesModel.activities].map(a => {
    a.user = ActivitiesModel.users.filter(u => u.id === a.userId)[0];
    return a;
})

function App({count, doIncrement, doDecrement}) {
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
            Count: {count}
            <button onClick={doIncrement}>Increment</button>
            <button onClick={doDecrement}>Decrement</button>
            <NewActivityForm handleSubmit={addNewActivity}/>
            <ActivityFeed activities={activities}/>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {count: state.count};
}

const mapDispatchToProps = (dispatch) => {
    return {
        doIncrement: () => dispatch(increment()),
        doDecrement: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
