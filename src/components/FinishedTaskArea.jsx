import TaskEntry from "./TaskEntry";

const FinishedTaskArea = (props) => {
    return (
        <div id="FinishedTaskArea">
            {props.todos.map((todo, index) => (<TaskEntry todo={todo} id={todo.id} key={index}/>))}
        </div>
    );
};

export default FinishedTaskArea;