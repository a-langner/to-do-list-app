import React from "react";
import InputArea from "./InputArea";
import OpenTaskArea from "./OpenTaskArea";
import FinishedTaskArea from "./FinishedTaskArea";

function Main({ addToDo, openToDos, doneToDos, toDoArray, dispatchToDoArray }) {
    return (
        <main>
            <InputArea onButton={addToDo}/>
            <OpenTaskArea currentToDos={openToDos} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
            <FinishedTaskArea currentToDos={doneToDos} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
        </main>
    )
}

export default Main
