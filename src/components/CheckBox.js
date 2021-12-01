import "../SCSS/CheckBox.scss";
import React, { useState } from 'react';

const CheckBox = () => {
    const [checkBox, setCheckBox] = useState(false);
    const switchCheckBox = () => setCheckBox(!checkBox);

    return (
        <div>
            <label class="CheckBox" >
                <input type="checkbox" id="checkBox" onClick={switchCheckBox} />
                <span class="FakeInput"></span>
                {/* <span>Finished</span> */}
            </label>
            <label for="checkBox" class="checkBoxLabel">{checkBox ? "Finished" : "Unfinished"}</label>
        </div>
    );
};

export default CheckBox;