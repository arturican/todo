import React, { ChangeEvent } from 'react';
import './Input.css';

type InputProps = {
  value: number;
  setValue: (value: number) => void;
};
export const Input = (props: InputProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setValue(Number(e.currentTarget.value));
  };

  return <input type="number" value={props.value} onChange={onChangeHandler} />;
};
