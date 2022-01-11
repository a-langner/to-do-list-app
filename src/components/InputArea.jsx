import { useState } from "react";
import { Link } from "react-router-dom";


const InputArea = (props) => {

    // const [id, setId] = useState(props.nextId);
    const [newTask, setNewTask] = useState({id: Date.now(), name: "", details: "", finalDate: "", urgency: "low", color: "grey", icon: "", done: false});
    // const [urgencyState, setUrgencyState] = useState(newTask.urgency);

    const sendData = (event) => {
        event.preventDefault();
        const dateFormat = [...newTask.finalDate.split("-").reverse()].join(".");
        const id = Date.now();
        const finalUpdate = {...newTask};
        finalUpdate.finalDate = dateFormat;
        finalUpdate.id = id;
        props.onButton(finalUpdate);
        setNewTask({id: Date.now(), name: "", details: "", finalDate: "", urgency: "low", color: "grey", icon: "", done: false});
    };

    const changeHandler = (event) => {
        const input = event.target.value;
        const newObject = {...newTask};
        newObject[event.target.name] = input;
        setNewTask(newObject);
    };

    const editCategories = (event) => {
        // event.preventDefault();
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
                    <label htmlFor="urgency" className="form-label">Urgency:</label>
                    <select name="urgency" onChange={changeHandler} id="urgencyInput" className={newTask.urgency}>
                        <option className="low" value="low">low</option>
                        <option className="medium" value="medium">medium</option>
                        <option className="high" value="high">high</option>
                        <option className="very-high" value="very-high">very high</option>
                    </select>
                    <div htmlFor="urgency" id="prioSelectDisplay"className={newTask.urgency}></div>
                </div>
                <div>
                    <label htmlFor="color" className="form-label">Color category:</label>
                    <select name="color" onChange={changeHandler} id="colorInput" className={newTask.color}>
                        <option className="grey" value="grey">grey</option>
                        <option className="white" value="white">white</option>
                        <option className="blue" value="blue">blue</option>
                        <option className="green" value="green">green</option>
                        <option className="turquoise" value="turquoise">turquoise</option>
                        <option className="purple" value="purple">purple</option>
                        <option className="pink" value="pink">pink</option>
                        <option className="red" value="red">red</option>
                        <option className="orange" value="orange">orange</option>
                        <option className="yellow" value="yellow">yellow</option>
                    </select>
                    <div htmlFor="color" id="colorSelectDisplay"className={newTask.color}></div>
                </div>
                <div className="fieldWrapper">
                    <input type="submit" value="Save Task" onClick={sendData}/>
                    <nav>
                        <Link to="/edit" >
                            <button onClick={editCategories}>Edit Color Categories</button>
                        </Link>
                    </nav>
                </div>
            </form>
        </div>
    );
};

export default InputArea;