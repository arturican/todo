import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";


export type TasksType = {
    id: string,
    title: string
    isDone: boolean
}

function App() {
    const tasks: TasksType[] = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ]
    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
