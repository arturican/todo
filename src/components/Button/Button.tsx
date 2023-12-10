import React from 'react';
import './Button.css';

type ButtonProps = {
  disabled?: boolean;
  title: string;
  callBack: () => void;
  number?: number;
};
export const Button = (props: ButtonProps) => {
  const counterPlus = () => {
    props.callBack();
  };
  return (
    <button className={props.disabled ? 'disabled' : 'button'} onClick={counterPlus} disabled={props.disabled}>
      {props.title}
    </button>
  );
};
