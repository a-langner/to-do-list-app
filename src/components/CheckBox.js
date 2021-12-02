import "../SCSS/CheckBox.scss";
import React, { useState } from 'react';

const CheckBox = (props) => {
    // console.log(key);
    const [checkBox, setCheckBox] = useState(props.done);
    const switchCheckBox = () => setCheckBox(!checkBox);

    return (
        <div>
            <label class="CheckBox" >
                <input type="checkbox" id={`checkBox${props.ID}`} onClick={switchCheckBox} defaultChecked={checkBox}/>
                <span class="FakeInput"></span>
                {/* <span>Finished</span> */}
            </label>
            <label for={`checkBox${props.ID}`} class="checkBoxLabel">{checkBox ? "Finished" : "Unfinished"}</label>
        </div>
    );
};

export default CheckBox;