import React from "react";
import { useState } from "react";


function Register() {
    const [newUser, setNewUser] = useState({username: "", email: "", firstName: "", lastName: "", password: ""});

    const changeHandler = (event) => {
        const input = event.target.value;
        const newObject = {...newUser};
        newObject[event.target.name] = input;
        setNewUser(newObject);
    };

    const sendData = (event) => {
        event.preventDefault();
        // props.onButton(newUser);
        setNewUser({username: "", email: "", firstName: "", lastName: "", password: ""});
    };

    return (
        <div>
            <h1>Register</h1>
            <form action="getform.php" method="get">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={changeHandler} value={newUser.username} />
                </div>
                <div>
                    <label htmlFor="email">EMail:</label>
                    <input type="text" name="email" id="email" onChange={changeHandler} value={newUser.email} />
                </div>
                <div>
                    <label htmlFor="firstName">Firstname:</label>
                    <input type="text" name="firstName" id="firstName" onChange={changeHandler} value={newUser.firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">Lastname:</label>
                    <input type="text" name="lastName" id="lastName" onChange={changeHandler} value={newUser.lastName} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={changeHandler} value={newUser.password} />
                </div>
                <div>
                    <input type="submit" value="Register User" onClick={sendData}/>
                </div>
            </form>
        </div>
    );
}

export default Register;
