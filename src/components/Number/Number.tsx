import React from 'react';
import './Number.css';

type NumberProps = {
  number: number;
};
export const Number = (props: NumberProps) => {
  return <div className={'numbers'}>{props.number}</div>;
};
