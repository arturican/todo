import React from 'react';

type ButtonProps = {
  onClick: () => void;
  primary: boolean;
  label: string;
};
export const ButtonMemo = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export const Button = React.memo(ButtonMemo);
