import React from 'react';
import {TasksType} from "../App";
import './Todolist.css'

export  type  TodolistType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
}
export const Todolist = (props: TodolistType) => {
    return (
        <div className={'wrapper'}>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <input type={"checkbox"} checked={t.isDone}/>{t.title}
                        <button onClick={() =>
                            props.removeTask(t.id)
                        }>x
                        </button>
                    </li>
                )}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

