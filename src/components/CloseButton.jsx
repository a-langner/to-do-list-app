import React from "react";
import { useToDoContext } from "../DataStorage";


function CloseButton({singleToDo}) {

    const { dispatchToDoArray } = useToDoContext();

    return (
        <div id={`close${singleToDo.id}`} className="arrow-t-b" onClick={() => dispatchToDoArray({type: "remove", id: singleToDo.id})}>
            Close
            <div className="arrow-l-r"> </div>
        </div>
    )
};

export default CloseButton;
