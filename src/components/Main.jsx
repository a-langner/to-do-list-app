import React from "react";
import InputArea from "./InputArea";
import OpenTaskArea from "./OpenTaskArea";
import FinishedTaskArea from "./FinishedTaskArea";
import { useToDoContext } from "../DataStorage";


function Main() {

    const { addToDo } = useToDoContext();
    return (
        <main>
            <InputArea onButton={addToDo}/>
            <OpenTaskArea />
            <FinishedTaskArea />
        </main>
    )
};

export default Main;
