import React from 'react';
import './Number.css';

type NumberProps = {
  number: number;
  maxValue: number;
  minValue: number;
};
export const Number = (props: NumberProps) => {
  return props.minValue < 0 ? (
    <span className={'error'}>Ошибка</span>
  ) : (
    <div className={props.number === props.maxValue ? 'red' : 'numbers'}>{props.number}</div>
  );
};
