import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";


export type TasksType = {
    id: string,
    title: string
    isDone: boolean
}

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ])
    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
