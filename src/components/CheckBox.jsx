import "../SCSS/CheckBox.scss";
import React, { useState } from 'react';

// const CheckBox = (props) => {
const CheckBox = ({currentToDos, toDoArray, dispatchToDoArray}) => {

    let {id, done} = currentToDos;

    return (
        <div>
            <label className="CheckBox" >
                <input type="checkbox" id={`checkBox${id}`} name={`checkBox${id}`} onChange={() => dispatchToDoArray({type: 'toggle', id: id, done: done})} checked={done}/>
                <span className="FakeInput"></span>
                {/* <span>Finished</span> */}
            </label>
            <label htmlFor={`checkBox${id}`} className="checkBoxLabel">{done ? "Finished" : "Unfinished"}</label>
        </div>
    );
};

export default CheckBox;