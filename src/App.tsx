import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";


export type TasksType = {
    id: string,
    title: string
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed';

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ])

    let taskForTodolist = tasks

    const [filter, setFilter] = useState<FilterType>('all')

    switch (filter) {
        case "active":
            taskForTodolist = tasks.filter(t => t.isDone === false)
            break;
        case "completed":
            taskForTodolist = tasks.filter(t => t.isDone === true)
            break;
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const filterTask = (filter: FilterType) => {
        setFilter(filter)
    }


    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={taskForTodolist}
                removeTask={removeTask}
                filterTask={filterTask}
            />
        </div>
    );
}

export default App;
