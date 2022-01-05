import TaskEntry from "./TaskEntry";

const OpenTaskArea = ({ currentToDos, toDoArray, dispatchToDoArray}) => {
    // {console.log(props)}
    return (
        <div id="OpenTaskArea">
            {currentToDos.map((singleToDo, index) => (<TaskEntry singleToDo={singleToDo} key={index} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>))}
        </div>
    );
};

export default OpenTaskArea;