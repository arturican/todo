import React, { useEffect } from 'react';
import './App.css';
import { Cont } from './components/Counter/Cont';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './reducers/store';
import { Setting } from './components/Setting/Setting';
import { setMaxValue, setMinValue, setNumber } from './reducers/count-reducers';

export const App = () => {
  const maxValue = useSelector<AppRootStateType, number>((state) => state.counter.maxValue);
  const minValue = useSelector<AppRootStateType, number>((state) => state.counter.minValue);
  const number = useSelector<AppRootStateType, number>((state) => state.counter.number);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    if (savedMaxValue) {
      dispatch(setMaxValue(JSON.parse(savedMaxValue)));
    }
  }, [dispatch]);

  useEffect(() => {
    const savedMinValue = localStorage.getItem('minValue');
    if (savedMinValue) {
      dispatch(setMinValue(JSON.parse(savedMinValue)));
    }
  }, [dispatch]);
  useEffect(() => {
    const savedNumber = localStorage.getItem('number');
    if (savedNumber) {
      dispatch(setNumber(JSON.parse(savedNumber)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [maxValue]);

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue));
  }, [minValue]);
  useEffect(() => {
    localStorage.setItem('number', JSON.stringify(number));
  }, [number]);

  const setValue = () => {
    dispatch(setMaxValue(maxValue));
    dispatch(setMinValue(minValue));
    dispatch(setNumber(minValue));
  };

  return (
    <div className="wrapper">
      <Cont minValue={minValue} maxValue={maxValue} number={number} />
      <Setting maxValue={maxValue} minValue={minValue} callBack={setValue} />
    </div>
  );
};
