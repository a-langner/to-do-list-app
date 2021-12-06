import React from 'react';
import CheckBox from "./CheckBox";
import "../SCSS/TaskEntry.scss";

function TaskEntry(props) {
    // console.log(props);

    return (
        <div className="TaskEntry">
            <h3>{props.todo.name}</h3>
            <CheckBox done={props.todo.done} id={props.id} todo={props.todo} onClick={props.onClick} />
        </div>
    )
}

export default TaskEntry;