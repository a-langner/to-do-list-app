import React from 'react'

function CloseButton({currentToDos, toDoArray, dispatchToDoArray}) {
    return (
        <div id={`close${currentToDos.id}`} className="arrow-t-b" onClick={() => dispatchToDoArray({type: 'remove', id: currentToDos.id})}>
            Close
            <div className="arrow-l-r"> </div>
        </div>
    )
}

export default CloseButton
