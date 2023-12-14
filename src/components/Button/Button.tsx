import React from 'react';

type ButtonProps = {
  onClick: () => void;
  primary: boolean;
  label: string;
};
export const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
