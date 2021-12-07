import React from 'react';
import CheckBox from "./CheckBox";
import "../SCSS/TaskEntry.scss";

function TaskEntry({currentToDos, toDoArray, setToDoArray}) {
    function close() {
        setToDoArray(toDoArray.filter(item => item.id !== currentToDos.id))
    }

    return (
        <div className="TaskEntry">
            <h3>{currentToDos.name}</h3>
            <CheckBox currentToDos={currentToDos} toDoArray={toDoArray} setToDoArray={setToDoArray}/>
            <div id={`close${currentToDos.id}`} onClick={close}>X</div>
        </div>
    )
}

export default TaskEntry;