import TaskEntry from "./TaskEntry";

const OpenTaskArea = (props) => {
    return (
        <div id="OpenTaskArea">
            {/* <TaskEntry taskName={props.taskName}/> */}
            {props.todos.map((todo, index) => (<TaskEntry todo={todo} ID={index} key={index}/>))}
        </div>
    );
};

export default OpenTaskArea;