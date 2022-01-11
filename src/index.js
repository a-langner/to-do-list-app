import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { UserData } from './DataStorage';


ReactDOM.render(
    <React.StrictMode>
        <UserData>
            <App />
        </UserData>
    </React.StrictMode>,
    document.getElementById("root")
);