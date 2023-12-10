import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './Setting.css';

type SettingProps = {
  maxValue: number;
  minValue: number;
  setMaxValue: (value: number) => void;
  setMinValue: (value: number) => void;
  callBack: () => void;
};

export const Setting = (props: SettingProps) => {
  return (
    <div className={'counter'}>
      <div className={'counter-input'}>
        {props.maxValue > props.minValue ? (
          <div className={'span-input'}>
            <span>max value : </span> <Input value={props.maxValue} setValue={props.setMaxValue} />
          </div>
        ) : (
          <span className={'error'}>Ошибка start value больше max value </span>
        )}
        {props.minValue < 0 ? (
          <div className={'span-input'}>
            <span className={'error'}>start value меньше нуля</span>
            <Input value={props.minValue} setValue={props.setMinValue} />
          </div>
        ) : (
          <div className={'span-input'}>
            <span>start value :</span> <Input value={props.minValue} setValue={props.setMinValue} />
          </div>
        )}
      </div>
      <div className={'counter-button'}>
        <Button title={'set'} callBack={props.callBack} />
      </div>
    </div>
  );
};
