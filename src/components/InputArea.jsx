import { useState } from 'react';

const InputArea = (props) => {
    const [id, setId] = useState(props.id);
    const [newTask, setNewTask] = useState({id: id, name: "", details: "", endDate: "", urgency: "", color: "", icon: "", done: false});

    const sendData = (event) => {
        event.preventDefault();
        props.onButton(newTask);
        setNewTask({id: id +1, name: "", details: "", endDate: "", urgency: "", color: "", icon: "", done: false});
        setId(id + 1);
    };

    const changeHandler = (event) => {
        const input = event.target.value;
        const newObject = {...newTask};
        newObject[event.target.name] = input;
        setNewTask(newObject);
    };

    return (
        <div id="InputArea">
            <form action="getform.php" method="get">
                <div className="fieldWrapper">
                    <label htmlFor="name" className="form-label">Task Name:</label>
                    <input type="text" id="name" name="name" onChange={changeHandler} value={newTask.name} /><br />
                </div>
                <div className="fieldWrapper">
                    <label htmlFor="details" className="form-label">Details / Description:</label>
                    <textarea id="details" name="details" cols="35" rows="4" onChange={changeHandler} value={newTask.details}></textarea>
                </div>
                <div className="fieldWrapper">
                    <label htmlFor="finalDateInput" className="form-label">Final Date:</label>
                    <input type="date" id="finalDateInput" name="finalDateInput" /><br />
                </div>
                <div className="fieldWrapper">
                    <input type="submit" value="Save Task" onClick={sendData}/>
                </div>
            </form>
        </div>
    );
};

export default InputArea;