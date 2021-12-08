import React from 'react';
import CheckBox from "./CheckBox";
import "../SCSS/TaskEntry.scss";

function TaskEntry({currentToDos, toDoArray, dispatchToDoArray}) {

    return (
        <div className="TaskEntry">
            <h3>{currentToDos.name}</h3>
            <CheckBox currentToDos={currentToDos} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
            {/* <div id={`close${currentToDos.id}`} class="close" onClick={() => dispatchToDoArray({type: 'remove', id: currentToDos.id})}></div> */}
            <div id={`close${currentToDos.id}`} class="arrow-t-b" onClick={() => dispatchToDoArray({type: 'remove', id: currentToDos.id})}>
                Close
                <div class="arrow-l-r"> </div>
            </div>
        </div>
    )
}

export default TaskEntry;