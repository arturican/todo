import React, { useState } from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';

export const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
    { message: 'message4' },
    { message: 'message5' },
  ]);

  const addInput = (title: string) => {
    setMessage([...message, { message: title }]);
  };

  const addTitleHandler = () => {
    addInput(title);
    setTitle('');
  };

  return (
    <div className="App">
      <Input setTitle={setTitle} title={title} />
      <Button name={'+'} callBack={addTitleHandler} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
};
