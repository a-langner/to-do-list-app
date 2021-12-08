import TaskEntry from "./TaskEntry";

const FinishedTaskArea = (props) => {
    return (
        <div id="FinishedTaskArea">
            {props.currentToDos.map((currentToDos, index) => (<TaskEntry currentToDos={currentToDos} key={index} toDoArray={props.toDoArray} dispatchToDoArray={props.dispatchToDoArray}/>))}
        </div>
    );
};

export default FinishedTaskArea;