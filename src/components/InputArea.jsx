import { useState } from 'react';

const InputArea = (props) => {
    // const [id, setId] = useState(props.nextId);
    const [newTask, setNewTask] = useState({id: Date.now(), name: "", details: "", finalDate: "", urgency: "", color: "", icon: "", done: false});

    const sendData = (event) => {
        event.preventDefault();
        const dateFormat = [...newTask.finalDate.split("-").reverse()].join(".");
        const id = Date.now();
        const finalUpdate = {...newTask};
        finalUpdate.finalDate = dateFormat;
        finalUpdate.id = id;
        // setNewTask(finalUpdate);
        props.onButton(finalUpdate);
        setNewTask({id: Date.now(), name: "", details: "", finalDate: "", urgency: "", color: "", icon: "", done: false});
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
                    <label htmlFor="finalDate" className="form-label">Final Date:</label>
                    <input type="date" id="finalDateInput" name="finalDate" onChange={changeHandler} 
                    // value={newTask.finalDate}
                    /><br />
                </div>
                <div>
                <label htmlFor="urgency" className="form-label prioMedium">Urgency:</label>
                    <select name="urgency" id="urgencyInput" className="prioMedium">
                        <option className="prioNormal" value="normal" selected>normal</option>
                        <option className="prioMedium" value="medium">medium</option>
                        <option className="prioHigh" value="high">high</option>
                        <option className="prioVeryHigh" value="very high">very high</option>
                    </select>
                </div>
                <div className="fieldWrapper">
                    <input type="submit" value="Save Task" onClick={sendData}/>
                </div>
            </form>
        </div>
    );
};

export default InputArea;