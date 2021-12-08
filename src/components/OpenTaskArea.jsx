import TaskEntry from "./TaskEntry";

const OpenTaskArea = (props) => {
    return (
        <div id="OpenTaskArea">
            {props.currentToDos.map((currentToDos, index) => (<TaskEntry currentToDos={currentToDos} key={index} toDoArray={props.toDoArray} dispatchToDoArray={props.dispatchToDoArray}/>))}
        </div>
    );
};

export default OpenTaskArea;