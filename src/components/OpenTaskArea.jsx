import TaskEntry from "./TaskEntry";

const OpenTaskArea = (props) => {
    return (
        <div id="OpenTaskArea">
            {props.currentToDos.map((currentToDos, index) => (<TaskEntry currentToDos={currentToDos} key={index} toDoArray={props.toDoArray} setToDoArray={props.setToDoArray}/>))}
        </div>
    );
};

export default OpenTaskArea;