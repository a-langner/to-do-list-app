import React from "react";
import CheckBox from "./CheckBox";
import CloseButton from "./CloseButton"
import "../SCSS/TaskEntry.scss";

function TaskEntry({singleToDo, toDoArray, dispatchToDoArray}) {

    return (
        <div className="TaskEntry">
            <div><span>Urgency: {singleToDo.urgency}</span><div id="prioSelectDisplay" className={singleToDo.urgency}></div></div>
            <div><span>Color category: </span><div id="colorSelectDisplay" className={singleToDo.color}></div></div>
            <h3>{singleToDo.name}</h3>
            <p className="details">{singleToDo.details}</p>
            {singleToDo.finalDate.length > 0 ? <p>Final Date: {singleToDo.finalDate}</p> : ""}
            {/* <p>Final Date: {singleToDo.finalDate}</p> */}
            <CheckBox singleToDo={singleToDo} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
            <CloseButton singleToDo={singleToDo} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
        </div>
    )
}

export default TaskEntry;