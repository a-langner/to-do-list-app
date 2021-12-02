import React from 'react';
import CheckBox from "./CheckBox";
import "../SCSS/TaskEntry.scss";

function TaskEntry(props) {
    // const { todo, done } = props;
    // console.log(todo);
    // console.log(done);
    console.log(props);

    return (
        <div className="TaskEntry">
            <h3>{props.todo.name}</h3>
            <CheckBox done={props.todo.done} ID={props.ID}/>
        </div>
    )
}

export default TaskEntry;