import React from 'react';

type ButtonType = {
  name: string;
  callBack: () => void;
};

export const Button: React.FC<ButtonType> = ({ name, callBack }) => <button onClick={callBack}>{name}</button>;
