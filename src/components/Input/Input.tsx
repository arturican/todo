import React, { ChangeEvent } from 'react';

export type InputProps = {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export const Input = (props: InputProps) => {
  return <input value={props.value} onChange={props.onChange} type={props.type} />;
};
