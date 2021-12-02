import TaskEntry from "./TaskEntry";

const FinishedTaskArea = (props) => {
    return (
        <div id="FinishedTaskArea">
            {props.todos.map((todo, index) => (<TaskEntry todo={todo} ID={index + 10000} key={index}/>))}
        </div>
    );
};

export default FinishedTaskArea;