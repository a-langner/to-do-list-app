import TaskEntry from "./TaskEntry";
import { useToDoContext } from "../DataStorage";


const FinishedTaskArea = () => {
    const { doneToDos } = useToDoContext();
    return (
        <div id="FinishedTaskArea">
            {doneToDos.map((singleToDo, index) => (<TaskEntry singleToDo={singleToDo} key={index} />))}
        </div>
    );
};

export default FinishedTaskArea;