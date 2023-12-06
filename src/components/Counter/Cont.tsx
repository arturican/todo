import React, { useState } from 'react';
import { Number } from '../Number/Number';
import { Button } from '../Button/Button';

export const Cont = () => {
  const [number, setNumbers] = useState(0);
  const numberIncrement = () => setNumbers(number + 1);
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
