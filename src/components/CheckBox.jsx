import "../SCSS/CheckBox.scss";
import React from "react";
import { useToDoContext } from "../DataStorage";


const CheckBox = ({singleToDo}) => {

    const { dispatchToDoArray } = useToDoContext();
    let {id, done} = singleToDo;

    return (
        <div>
            <label className="CheckBox" >
                <input type="checkbox" id={`checkBox${id}`} name={`checkBox${id}`} onChange={() => dispatchToDoArray({type: "toggle", id: id, done: done})} checked={done}/>
                <span className="FakeInput"></span>
                {/* <span>Finished</span> */}
            </label>
            <label htmlFor={`checkBox${id}`} className="checkBoxLabel">{done ? "Finished" : "Unfinished"}</label>
        </div>
    );
};

export default CheckBox;