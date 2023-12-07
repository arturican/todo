import React from 'react';
import './App.css';
import { Cont } from './components/Counter/Cont';
import { Setting } from './components/Setting/Setting';

export const App = () => {
  return (
    <div className="wrapper">
      <Cont />
      <Setting />
    </div>
  );
};
