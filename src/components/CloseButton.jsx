import React from "react"

function CloseButton({singleToDo, toDoArray, dispatchToDoArray}) {
    return (
        <div id={`close${singleToDo.id}`} className="arrow-t-b" onClick={() => dispatchToDoArray({type: "remove", id: singleToDo.id})}>
            Close
            <div className="arrow-l-r"> </div>
        </div>
    )
}

export default CloseButton
