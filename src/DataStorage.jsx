import { useState, useReducer, useEffect, createContext, useContext } from "react";


const DataStorage = createContext();


function UserData(props) {

    const testArray = [
        {
            id: 0,
            name: "Atmen",
            details: "nicht vergessen",
            finalDate: "01.01.2501",
            urgency: "high",
            color: "blue",
            icon: "GiBurningSkull",
            done: false
        },
        {
            id: 1,
            name: "Schlafen",
            details: "kann nicht schaden",
            finalDate: "",
            urgency: "low",
            color: "green",
            icon: "GiBurningSkull",
            done: false
        },
        {
            id: 2,
            name: "Zellteilung",
            details: "bla bla bla",
            finalDate: "01.01.2501",
            urgency: "medium",
            color: "grey",
            icon: "GiBurningSkull",
            done: true
        }
    ];

    const colorDefault = [
        {
            name: "grey",
            value: "grey"
        },
        {
            name: "white",
            value: "white"
        },        {
            name: "blue",
            value: "blue"
        },
        {
            name: "green",
            value: "green"
        },
        {
            name: "turquoise",
            value: "turquoise"
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

            case "restore":
                return [...action.data]
                break;
          
            default:
                return originalArray
                break;
        }
    };


    const [toDoArray, dispatchToDoArray] = useReducer(toDoArrayReducer, []);

    useEffect(() => {
        const restoredToDoList = localStorage.getItem("toDoArray");
        const startToDoList = restoredToDoList ? JSON.parse(restoredToDoList) : testArray;
        dispatchToDoArray({type: "restore", data: startToDoList})
    }, []);


    useEffect(() => {
        localStorage.setItem("toDoArray", JSON.stringify(toDoArray))
    }, [toDoArray]);
    

    const addToDo = (newTask) => {
        dispatchToDoArray({type: "add", newTask: newTask});
    };


    const openToDos = toDoArray.filter(toDo => !toDo.done);
    const doneToDos = toDoArray.filter(toDo => toDo.done);


    return (
        <div>
            <DataStorage.Provider value={{ toDoArray, dispatchToDoArray, addToDo, openToDos, doneToDos }}>
                {props.children}
            </DataStorage.Provider>
        </div>
    )
};

function useToDoContext() {
    return useContext(DataStorage)
}

export { DataStorage, useToDoContext, UserData };
