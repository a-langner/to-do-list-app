import "../SCSS/CheckBox.scss";
import React, { useState } from 'react';

const CheckBox = (props) => {
    // console.log(key);
    const [checkBox, setCheckBox] = useState(props.done);

    const switchCheckBox = (props) => {
        setCheckBox(!checkBox);
        // props.todo.done = checkBox;
        // console.log(props);
    };

    return (
        <div>
            <label class="CheckBox" >
                <input type="checkbox" id={`checkBox${props.id}`} name={`checkBox${props.id}`} onClick={switchCheckBox} defaultChecked={checkBox}/>
                <span class="FakeInput"></span>
                {/* <span>Finished</span> */}
            </label>
            <label for={`checkBox${props.id}`} class="checkBoxLabel">{checkBox ? "Finished" : "Unfinished"}</label>
            {/* {console.log(props.onClick)} */}
        </div>
    );
};

export default CheckBox;