import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Setting = () => {
  return (
    <div className={'counter'}>
      <div className={'counter-input'}>
        <div className={'span-input'}>
          <span>max value : </span> <Input />
        </div>
        <div className={'span-input'}>
          <span>start value :</span> <Input />
        </div>
      </div>
      <div className={'counter-button'}>
        <Button title={'set'} callBack={() => {}} />
      </div>
    </div>
  );
};
