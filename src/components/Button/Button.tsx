import React from 'react';
import './Button.css';

type ButtonProps = {
  disabled?: number;
  title: string;
  callBack: () => void;
};
export const Button = (props: ButtonProps) => {
  const counterPlus = () => {
    props.callBack();
  };
  return (
    <button
      className={props.disabled === 5 ? 'disabled' : 'button'}
      onClick={counterPlus}
      disabled={props.disabled === 5}
    >
      {props.title}
    </button>
  );
};
