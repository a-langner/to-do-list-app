import TaskEntry from "./TaskEntry";

const OpenTaskArea = (props) => {
    return (
        <div id="OpenTaskArea">
            {/* <TaskEntry taskName={props.taskName}/> */}
            {props.todos.map((todo, index) => (<TaskEntry todo={todo} id={todo.id} key={index} onClick={props.onClick} />))}
        </div>
    );
};

export default OpenTaskArea;