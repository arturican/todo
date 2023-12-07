import React, { useEffect, useState } from 'react';
import { Number } from '../Number/Number';
import { Button } from '../Button/Button';

export const Cont = () => {
  const [number, setNumbers] = useState(0);

  useEffect(() => {
    const number = localStorage.getItem('current');
    if (number) {
      setNumbers(JSON.parse(number));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('current', JSON.stringify(number));
  }, [number]);

  const numberIncrement = () => {
    setNumbers(number + 1);
  };
  const numberReset = () => setNumbers(0);
  return (
    <div className={'counter'}>
      <div className={'counterNumber'}>
        <Number number={number} />
      </div>
      <div className={'counter-button'}>
        <Button title={'ins'} callBack={numberIncrement} disabled={number} />
        <Button title={'reset'} callBack={numberReset} />
      </div>
    </div>
  );
};
