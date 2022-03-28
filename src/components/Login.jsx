import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
  


function Login() {
    const navigate = useNavigate();
    const [newLogin, setNewLogin] = useState({email: "", password: ""});

    const changeHandler = (event) => {
        const input = event.target.value;
        const newObject = {...newLogin};
        newObject[event.target.name] = input;
        setNewLogin(newObject);
    };

    async function sendData(event) {
        event.preventDefault()
        
        const rawResponse = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: newLogin.email,
                password: newLogin.password,
            }),
        });
    
        if(rawResponse.ok) {
            const data = await rawResponse.json()
            sessionStorage.token = data.token
            console.log('token', data.token)
            navigate('/')
        } else {
            console.error('failed')
        }
    };


    return (
        <div>
            <h1>Login</h1>
            <form action="getform.php" method="get">
                <div>
                    <label htmlFor="email">EMail:</label>
                    <input type="text" name="email" id="email" onChange={changeHandler} value={newLogin.email} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={changeHandler} value={newLogin.password} />
                </div>
                <div>
                    <input type="submit" value="Login User" onClick={sendData}/>
                </div>

                <nav>
                    <p>If you don't have an account, please register here:</p>
                    <Link to="/register" >
                        <button>Registry-Page</button>
                    </Link>
                </nav>
            </form>
        </div>
    );
}

export default Login;
