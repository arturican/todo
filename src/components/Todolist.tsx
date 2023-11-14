import React from 'react';
import {FilterType, TasksArrayType} from '../App';
import './Todolist.css';
import {AddItemForm} from './AddItemForm';
import {EditSpan} from './EditSpan';
import Checkbox from "./Checkbox";

export type TodolistType = {
    id: string;
    title: string;
    tasks: TasksArrayType[];
    removeTask: (tlId: string, id: string) => void;
    filterTask: (id: string, filter: FilterType) => void;
    addTask: (tlId: string, title: string) => void;
    changeCheckStatus: (tlId: string, isDone: boolean, id: string) => void;
    filter: FilterType;
    removeTodolist: (tlId: string) => void;
    updateTask: (tlId: string, idTask: string, title: string) => void;
    updateTodolistTitle: (tlId: string, title: string) => void;
};
export const Todolist = (props: TodolistType) => {
    const addTaskHadler = (title: string) => {
        props.addTask(props.id, title);
    };
    const editSpanTodolistHandler = (title: string) => {
        props.updateTodolistTitle(props.id, title);
    };
    const onChangeCheckboxHandler = (isDone: boolean, id: string) => {
        props.changeCheckStatus(props.id, isDone, id);
    };
    return (
        <div className={'wrapper'}>
            <div className={'wrapper-title'}>
                <h3>
                    <EditSpan value={props.title} onChange={editSpanTodolistHandler}/>
                </h3>
                <button
                    onClick={() => {
                        props.removeTodolist(props.id);
                    }}
                >
                    X
                </button>
            </div>
            <AddItemForm addItem={addTaskHadler}/>

            <ul>
                {props.tasks.map((t) => {
                    /*const onChangeHandler = () => {
                      props.changeCheckStatus(props.id, t.isDone, t.id);
                    };*/
                    const editSpanTaskHandler = (title: string) => {
                        props.updateTask(props.id, t.id, title);
                    };

                    return (
                        <li key={t.id}>
                            {/*<input
                type={'checkbox'}
                checked={t.isDone}
                onChange={onChangeHandler}
                className={t.isDone ? 'is-done' : ''}
              />*/}
                            <Checkbox
                                style={t.isDone}
                                checked={t.isDone}
                                callBack={() => onChangeCheckboxHandler(t.isDone, t.id)}
                            />
                            <EditSpan value={t.title} onChange={editSpanTaskHandler}/>
                            <button onClick={() => props.removeTask(props.id, t.id)}>x</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button
                    onClick={() => props.filterTask(props.id, 'all')}
                    className={props.filter === 'all' ? 'active-filter' : ''}
                >
                    All
                </button>
                <button
                    onClick={() => props.filterTask(props.id, 'active')}
                    className={props.filter === 'active' ? 'active-filter' : ''}
                >
                    Active
                </button>
                <button
                    onClick={() => props.filterTask(props.id, 'completed')}
                    className={props.filter === 'completed' ? 'active-filter' : ''}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};
