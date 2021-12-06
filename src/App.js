import './App.scss';
import { useState } from 'react';
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import OpenTaskArea from "./components/OpenTaskArea";
import FinishedTaskArea from "./components/FinishedTaskArea";


function App() {
    const testArray = [
        {
            id: 0,
            name: "Atmen",
            details: "bla bla bla",
            endDate: "000",
            urgency: "red",
            color: "blue",
            icon: "GiBurningSkull",
            done: false
        },
        {
            id: 1,
            name: "Schlafen",
            details: "bla bla bla",
            endDate: "000",
            urgency: "yellow",
            color: "green",
            icon: "GiBurningSkull",
            done: false
        },
        {
            id: 2,
            name: "Zellteilung",
            details: "bla bla bla",
            endDate: "000",
            urgency: "orange",
            color: "white",
            icon: "GiBurningSkull",
            done: true
        }
    ];

    const [toDoArray, setToDoArray] = useState(testArray);

    const addTodo = (newTask) => {
        setToDoArray([...toDoArray, newTask]);
    };

    const toggle = (changedTask) => {
        // for (i = 0; i < toDoArray.length, i++)
        console.log("test");
    }

    const openTodos = toDoArray.filter(todo => !todo.done);
    const doneTodos = toDoArray.filter(todo => todo.done);


    return (
        <div className="App">
            <Header />
            <main>
                <InputArea onButton={addTodo} id={toDoArray.length}/>
                <OpenTaskArea todos={openTodos} onClick={toggle}/>
                <FinishedTaskArea todos={doneTodos}/>
            </main>
        </div>
    );
}

export default App;
