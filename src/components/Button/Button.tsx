import React from 'react';
import './Button.css';

type ButtonProps = {
  title: string;
  callBack: () => void;
};
export const Button = (props: ButtonProps) => {
  const counterPlus = () => {
    props.callBack();
  };
  return (
    <button className={'button'} onClick={counterPlus}>
      {props.title}
    </button>
  );
};
