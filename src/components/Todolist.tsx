import React from 'react';
import {TasksType} from "../App";
import   './Todolist.css'

export  type  TodolistType = {
    title: string
    tasks: TasksType[]
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
                    <li key={t.id}><input type={"checkbox"} checked={t.isDone}/>{t.title}</li>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

