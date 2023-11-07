import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterType, TasksType} from "../App";
import './Todolist.css'


export  type  TodolistType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    filterTask: (filter: FilterType) => void
    addTask: (title: string) => void
    changeCheckStatus: (isDone: boolean, id: string) => void

}
export const Todolist = (props: TodolistType) => {
    const [title, setTitle] = useState('');
    const [eror, serEror] = useState<null | string>()

    const addTaskHandler = () => {
        if (title.trim() === '') {
            serEror('Ошибка введите текст')
        } else {
            props.addTask(title)
            setTitle('')
        }

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        serEror(null)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    return (

        <div className={'wrapper'}>
            <h3>{props.title}</h3>
            <div>
                <input
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    value={title}
                    className={eror ? 'error' : ''}
                />
                <button onClick={addTaskHandler}>+</button>
                {eror && <div className={eror ? 'error-message' : ''}>{eror}</div>}
            </div>
            <ul>
                {props.tasks.map((t) => {
                 const onChangeHandler=()=> {props.changeCheckStatus(t.isDone, t.id)}

                    return (
                    <li key={t.id}>
                    <input type={"checkbox"} checked={t.isDone} onChange={onChangeHandler}/>{t.title}
                    <button onClick={() =>
                    props.removeTask(t.id)
                }>x
                    </button>
                    </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.filterTask('all')}>All</button>
                <button onClick={() => props.filterTask('active')}>Active</button>
                <button onClick={() => props.filterTask('completed')}>Completed</button>
            </div>
        </div>
    );
};

