import React from 'react';
import { RatingValue } from '../UncontrolRating/UncontrolRating';

export type StarType = {
  selected: boolean;
  onClick: () => void;
};
export type RatingType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
  callBack: (value: RatingValue) => void;
};
export const Rating = (props: RatingType) => {
  return (
    <div>
      <Star selected={props.value > 0} onClick={() => props.callBack(1)} />
      <Star selected={props.value > 1} onClick={() => props.callBack(2)} />
      <Star selected={props.value > 2} onClick={() => props.callBack(3)} />
      <Star selected={props.value > 3} onClick={() => props.callBack(4)} />
      <Star selected={props.value > 4} onClick={() => props.callBack(5)} />
    </div>
  );
};
const Star = (props: StarType) => {
  return <span onClick={props.onClick}>{props.selected ? <b>star </b> : 'star '}</span>;
};
