import React, { useState } from 'react';

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5;

export type StarType = {
  selected: boolean;
  setValue: (value: RatingValue) => void;
  value: RatingValue;
};

const UncontrolRatingMemo = () => {
  const [value, setValue] = useState<number>(0);
  console.log(value);
  return (
    <div>
      <Star selected={value > 0} setValue={setValue} value={1} />
      <Star selected={value > 1} setValue={setValue} value={2} />
      <Star selected={value > 2} setValue={setValue} value={3} />
      <Star selected={value > 3} setValue={setValue} value={4} />
      <Star selected={value > 4} setValue={setValue} value={5} />
    </div>
  );
};
export const UncontrolRating = React.memo(UncontrolRatingMemo);
const StarMemo = (props: StarType) => {
  return <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star--</b> : 'star--'}</span>;
};

export const Star = React.memo(StarMemo);
