import React from 'react';
import './Button.css';

type ButtonProps = {
  disabled?: boolean;
  title: string;
  callBack: () => void;
  number?: number;
};
export const Button = (props: ButtonProps) => {
  const callBack = () => {
    props.callBack();
  };
  return (
    <button className={props.disabled ? 'disabled' : 'button'} onClick={callBack} disabled={props.disabled}>
      {props.title}
    </button>
  );
};
