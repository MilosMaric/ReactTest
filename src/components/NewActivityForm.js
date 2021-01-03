import React, {useState} from 'react';
import '../styles/NewActivityForm.css'
import {ActivityType} from "../data/ActivityMockData";

const NewActivityForm = ({handleSubmit}) => {
    const [type, setType] = useState(ActivityType.NOTE);
    const [url, setUrl] = useState('');
    const [note, setNote] = useState('');

    const generateOnChangeCallback = ({e, stateSetter}) => {
        return () => stateSetter(e.target.value);
    }

    //TODO: Add test for activity adding.
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({type, url, note});
    }
    return (
        <form className="new-activity-form" onSubmit={onSubmit}>
            <select onChange={e => generateOnChangeCallback({e, stateSetter: setType})()} value={type}>
                {Object.entries(ActivityType).map(([key, value]) => {
                    return (<option value={key} key={key}> {value} </option>)
                })}
            </select>
            <input type="text" onChange={e => generateOnChangeCallback({e, stateSetter: setUrl})()} value={url}/>
            <textarea cols="30" rows="5" onChange={e => generateOnChangeCallback({e, stateSetter: setNote})()}
                      value={note}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewActivityForm;