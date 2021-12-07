import "../SCSS/CheckBox.scss";
import React, { useState } from 'react';

// const CheckBox = (props) => {
const CheckBox = ({currentToDos, toDoArray, setToDoArray}) => {

    let {id, done} = currentToDos;

    const switchCheckBox = () => {
        setToDoArray(
            toDoArray.map(item => {
                if (item.id === id) {
                    return {...item, done: !done}
                }
            return item;
            })
        )
    };


    return (
        <div>
            <label className="CheckBox" >
                <input type="checkbox" id={`checkBox${id}`} name={`checkBox${id}`} onChange={switchCheckBox} checked={done}/>
                <span className="FakeInput"></span>
                {/* <span>Finished</span> */}
            </label>
            <label htmlFor={`checkBox${id}`} className="checkBoxLabel">{done ? "Finished" : "Unfinished"}</label>
        </div>
    );
};

export default CheckBox;