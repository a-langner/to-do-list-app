import './App.scss';
import { useState, useReducer } from 'react';
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import OpenTaskArea from "./components/OpenTaskArea";
import FinishedTaskArea from "./components/FinishedTaskArea";


function App() {
    const testArray = [
        {
            id: 0,
            name: "Atmen",
            details: "nicht vergessen",
            finalDate: "01.01.2501",
            urgency: "red",
            color: "blue",
            icon: "GiBurningSkull",
            done: false
        },
        {
            id: 1,
            name: "Schlafen",
            details: "kann nicht schaden",
            finalDate: "",
            urgency: "yellow",
            color: "green",
            icon: "GiBurningSkull",
            done: false
        },
        {
            id: 2,
            name: "Zellteilung",
            details: "bla bla bla",
            finalDate: "01.01.2501",
            urgency: "orange",
            color: "white",
            icon: "GiBurningSkull",
            done: true
        }
    ];


    const toDoArrayReducer = (originalArray, action) => {
        switch (action.type) {
            case "add":
                const addArray = [...originalArray];
                return [...addArray, action.newTask];
                break
        
            case "remove":
                const removeArray = [...originalArray];
                return removeArray.filter(item => item.id !== action.id)
                break;

            case "toggle":
                const toggleArray = [...originalArray];
                return toggleArray.map(item => {
                    if (item.id === action.id) {
                        return {...item, done: !action.done}
                    }
                return item;})
                break;
          
            default:
                return originalArray
                break;
        }
    }

    const [toDoArray, dispatchToDoArray] = useReducer(toDoArrayReducer ,testArray);

    const addTodo = (newTask) => {
        dispatchToDoArray({type: "add", newTask: newTask});
    };


    const openTodos = toDoArray.filter(todo => !todo.done);
    const doneTodos = toDoArray.filter(todo => todo.done);


    return (
        <div className="App">
            <Header />
            <main>
                <InputArea onButton={addTodo}/>
                <OpenTaskArea currentToDos={openTodos} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
                <FinishedTaskArea currentToDos={doneTodos} toDoArray={toDoArray} dispatchToDoArray={dispatchToDoArray}/>
            </main>
        </div>
    );
}

export default App;
