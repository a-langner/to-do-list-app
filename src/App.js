import './App.scss';
import { useState } from 'react';
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import OpenTaskArea from "./components/OpenTaskArea";
import FinishedTaskArea from "./components/FinishedTaskArea";


function App() {
    const [newTask, setTask] = useState("Test");

    const addTodo = (name) => {
        setTask(name);
    };

    const toDoArray = [
        {
            name: "Atmen",
            details: "bla bla bla",
            endDate: "000",
            urgency: "red",
            color: "blue",
            icon: "GiBurningSkull",
            done: false
        },
        {
            name: "Schlafen",
            details: "bla bla bla",
            endDate: "000",
            urgency: "yellow",
            color: "green",
            icon: "GiBurningSkull",
            done: false
        },
        {
            name: "Zellteilung",
            details: "bla bla bla",
            endDate: "000",
            urgency: "orange",
            color: "white",
            icon: "GiBurningSkull",
            done: true
        }
    ];
    const openTodos = toDoArray.filter(todo => !todo.done);
    const doneTodos = toDoArray.filter(todo => todo.done);

    return (
        <div className="App">
            <Header />
            <main>
                <InputArea onButton={addTodo}/>
                {/* <OpenTaskArea taskName={newTask}/> */}
                <OpenTaskArea todos={openTodos}/>
                <FinishedTaskArea todos={doneTodos}/>
            </main>
        </div>
    );
}

export default App;
