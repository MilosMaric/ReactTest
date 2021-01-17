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

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({type, url, note});
    }
    return (
        <form className="new-activity-form" onSubmit={onSubmit}>
            <select onChange={e => generateOnChangeCallback({e, stateSetter: setType})()} value={type}
                    className='new-activity-form-input'>
                {Object.entries(ActivityType).map(([key, value]) => {
                    return (<option value={key} key={key}> {value} </option>)
                })}
            </select>
            <input className='new-activity-form-input'
                   type="text"
                   placeholder='Add property URL (optional)'
                   onChange={e => generateOnChangeCallback({e, stateSetter: setUrl})()}
                   value={url}/>
            <textarea cols="30"
                      rows="5"
                      placeholder='Add notes...'
                      onChange={e => generateOnChangeCallback({e, stateSetter: setNote})()}
                      value={note}
                      className='new-activity-form-input'/>
            <div className='new-activity-form-submit-button-container'>
                <button type="submit" className='new-activity-form-submit-button'>Submit</button>
            </div>
        </form>
    );
}

export default NewActivityForm;