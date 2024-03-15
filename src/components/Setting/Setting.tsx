import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './Setting.css';
import { useDispatch } from 'react-redux';
import { changeValueMax, changeValueMin } from '../../reducers/count-reducers';

type SettingProps = {
  maxValue: number;
  minValue: number;
  callBack: () => void;
};
export const Setting = (props: SettingProps) => {
  const dispatch = useDispatch();
  return (
    <div className={'counter'}>
      <div className={'counter-input'}>
        {props.maxValue > props.minValue ? (
          <div className={'span-input'}>
            <span>max value : </span> <Input value={props.maxValue} setValue={(e) => dispatch(changeValueMax(e))} />
          </div>
        ) : (
          <div className={'span-input'}>
            <span className={'error'}>Ошибка start value больше или равно max value </span>
            <Input value={props.maxValue} setValue={(e) => dispatch(changeValueMax(e))} />
          </div>
        )}
        {props.minValue < 0 ? (
          <div className={'span-input'}>
            <span className={'error'}>start value меньше нуля</span>
            <Input value={props.minValue} setValue={(e) => dispatch(changeValueMin(e))} />
          </div>
        ) : (
          <div className={'span-input'}>
            <span>start value :</span> <Input value={props.minValue} setValue={(e) => dispatch(changeValueMin(e))} />
          </div>
        )}
      </div>
      <div className={'counter-button'}>
        <Button title={'set'} callBack={props.callBack} />
      </div>
    </div>
  );
};
