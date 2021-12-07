import TaskEntry from "./TaskEntry";

const FinishedTaskArea = (props) => {
    return (
        <div id="FinishedTaskArea">
            {props.currentToDos.map((currentToDos, index) => (<TaskEntry currentToDos={currentToDos} key={index} toDoArray={props.toDoArray} setToDoArray={props.setToDoArray}/>))}
        </div>
    );
};

export default FinishedTaskArea;