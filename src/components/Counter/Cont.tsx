import React from 'react';
import { Number } from '../Number/Number';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { incrementCount, initialState, resetCount } from '../../reducers/count-reducers';

type ContProps = {
  number: number;
  minValue: number;
  maxValue: number;
  /*  setNumber: (value: number) => void;*/
};

export const Cont = (props: ContProps) => {
  const dispatch = useDispatch();
  const numberIncrement = () => {
    dispatch(incrementCount());
  };
  const numberReset = () => dispatch(resetCount());
  return (
    <div className={'counter'}>
      <div className={'counterNumber'}>
        <Number number={props.number} maxValue={props.maxValue} minValue={props.minValue} />
      </div>
      <div className={'counter-button'}>
        <Button title={'ins'} callBack={numberIncrement} disabled={props.maxValue <= props.number} />
        <Button title={'reset'} callBack={numberReset} />
      </div>
    </div>
  );
};
console.log(initialState);
