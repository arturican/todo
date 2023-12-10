import React from 'react';
import { Number } from '../Number/Number';
import { Button } from '../Button/Button';

type ContProps = {
  number: number;
  minValue: number;
  maxValue: number;
  setNumber: (value: number) => void;
};

export const Cont = (props: ContProps) => {
  const numberIncrement = () => {
    props.setNumber(props.number + 1);
  };
  const numberReset = () => props.setNumber(props.minValue);
  return (
    <div className={'counter'}>
      <div className={'counterNumber'}>
        <Number number={props.number} maxValue={props.maxValue} minValue={props.minValue} />
      </div>
      <div className={'counter-button'}>
        <Button title={'ins'} callBack={numberIncrement} disabled={props.number === props.maxValue} />
        <Button title={'reset'} callBack={numberReset} />
      </div>
    </div>
  );
};
