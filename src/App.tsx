import React, { useState } from 'react';
import './App.css';
import { Cont } from './components/Counter/Cont';
import { Setting } from './components/Setting/Setting';

export const App = () => {
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [number, setNumber] = useState(0);

  const setValue = () => {
    setMaxValue(maxValue);
    setMinValue(minValue);
    setNumber(minValue);
  };
  return (
    <div className="wrapper">
      <Cont minValue={minValue} maxValue={maxValue} number={number} setNumber={setNumber} />
      <Setting
        maxValue={maxValue}
        minValue={minValue}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
        callBack={setValue}
      />
    </div>
  );
};
