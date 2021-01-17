import React, {useState} from "react";
import ActivityFeed from "./components/ActivityFeed";
import NewActivityForm from "./components/NewActivityForm";
import './App.css';
import {connect} from "react-redux";
import {addActivityAction} from "./actions/actions";
import Modal from 'react-modal';

const customStyles = {
    content: {
        height: '50%',
        width: '50%',
        left: '22.5%',
        top: '25%',
        right: 'auto',
        bottom: 'auto',
        padding: '0px'
    }
};

function App({activities, addActivity}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleActivityAddingSubmit = newActivity => {
        addActivity(newActivity);
        setIsModalVisible(false);
    }

    return (
        <>
            <Modal isOpen={isModalVisible}
                   style={customStyles}>
                <div className='add-activity-modal-heading'>
                    <span>Add Activity</span>
                    <span className='add-activity-modal-heading-close-button'
                          onClick={() => setIsModalVisible(false)}>X</span>
                </div>
                <NewActivityForm handleSubmit={handleActivityAddingSubmit}/>
            </Modal>
            <ActivityFeed activities={activities}
                          openModal={() => setIsModalVisible(true)}/>
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
