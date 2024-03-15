import React from 'react';
import './App.css';
import { Cont } from './components/Counter/Cont';
import { useSelector } from 'react-redux';
import { AppRootStateType } from './reducers/store';
import { Setting } from './components/Setting/Setting';

export const App = () => {
  const maxValue = useSelector<AppRootStateType, number>((state) => state.counter.maxValue);
  const minValue = useSelector<AppRootStateType, number>((state) => state.counter.minValue);
  const number = useSelector<AppRootStateType, number>((state) => state.counter.number);

  return (
    <div className="wrapper">
      <Cont minValue={minValue} maxValue={maxValue} number={number} />
      <Setting maxValue={maxValue} minValue={minValue} />
    </div>
  );
};
