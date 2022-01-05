import TaskEntry from "./TaskEntry";

const FinishedTaskArea = ({ currentToDos, toDoArray, dispatchToDoArray}) => {
    return (
        <div id="FinishedTaskArea">
            {currentToDos.map((singleToDo, index) => (<TaskEntry singleToDo={singleToDo} key={index} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>))}
        </div>
    );
};

export default FinishedTaskArea;