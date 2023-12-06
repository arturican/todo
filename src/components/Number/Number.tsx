import React from 'react';
import './Number.css';

type NumberProps = {
  number: number;
};
export const Number = (props: NumberProps) => {
  return <div className={props.number === 5 ? 'red' : 'numbers'}>{props.number}</div>;
};
