import React from "react";
import ActivityFeed from "./components/ActivityFeed";
import NewActivityForm from "./components/NewActivityForm";
import './App.css';
import {connect} from "react-redux";
import {addActivityAction} from "./actions/actions";

function App({activities, addActivity}) {
    return (
        <>
            <NewActivityForm handleSubmit={addActivity}/>
            <ActivityFeed activities={activities}/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {activities: state.activities};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addActivity: newActivity => dispatch(addActivityAction(newActivity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
