import React from 'react';
import CheckBox from "./CheckBox";
import CloseButton from './CloseButton'
import "../SCSS/TaskEntry.scss";

function TaskEntry({currentToDos, toDoArray, dispatchToDoArray}) {

    return (
        <div className="TaskEntry">
            <h3>{currentToDos.name}</h3>
            <p className="details">{currentToDos.details}</p>
            {currentToDos.finalDate.length > 0 ? <p>Final Date: {currentToDos.finalDate}</p> : ""}
            {/* <p>Final Date: {currentToDos.finalDate}</p> */}
            <CheckBox currentToDos={currentToDos} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
            <CloseButton currentToDos={currentToDos} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
        </div>
    )
}

export default TaskEntry;