import React from 'react';
import './App.css';
import { Cont } from './components/Counter/Cont';
import { Setting } from './components/Setting/Setting';
import { useSelector } from 'react-redux';

export const App = () => {
  const maxValue = useSelector((state) => state.counter.maxValue);
  const minValue = useSelector((state) => state.counter.minValue);
  const number = useSelector((state) => state.counter.number);

  const setValue = () => {
    console.log('lol');
  };
  return (
    <div className="wrapper">
      <Cont minValue={minValue} maxValue={maxValue} number={number} />
      <Setting maxValue={maxValue} minValue={minValue} callBack={setValue} />
    </div>
  );
};
