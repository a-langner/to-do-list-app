import TaskEntry from "./TaskEntry";
import { useToDoContext } from "../DataStorage";


const OpenTaskArea = () => {
    const { openToDos } = useToDoContext();
    return (
        <div id="OpenTaskArea">
            {openToDos.map((singleToDo, index) => (<TaskEntry singleToDo={singleToDo} key={index} />))}
        </div>
    );
};

export default OpenTaskArea;