import { useState } from 'react';

const InputArea = (props) => {
    const [taskName, setTaskName] = useState('-');

    const fertig = (event) => {
        event.preventDefault()
        props.onButton(taskName);
    };

    const changeHandler = (event) => {
        setTaskName(event.target.value);
    };

    return (
        <div id="InputArea">
            <form action="getform.php" method="get">
                <div class="fieldWrapper">
                    <label for="taskNameInput" class="form-label">Task Name:</label>
                    <input type="text" id="taskNameInput" name="taskNameInput" onChange={changeHandler} value={taskName}/><br />
                </div>
                <div class="fieldWrapper">
                <label for="taskDetailsInput" class="form-label">Details / Description:</label>
                <textarea id="taskDetailsInput" name="taskDetailsInput" cols="35" rows="4"></textarea>
                </div>
                <div class="fieldWrapper">
                <label for="finalDateInput" class="form-label">Final Date:</label>
                <input type="date" id="finalDateInput" name="finalDateInput" /><br />
                </div>
                <div class="fieldWrapper">
                <input type="submit" value="Save Task" onClick={fertig}/>
                </div>
            </form>
        </div>
    );
};

export default InputArea;