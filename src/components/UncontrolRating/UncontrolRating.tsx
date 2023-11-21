import React, { useState } from 'react';

export type StarType = {
  selected: boolean;
  setValue: () => void;
};

export const UncontrolRating = () => {
  const [value, setValue] = useState<number>(0);
  console.log(value);
  return (
    <div>
      <Star selected={value > 0} setValue={() => setValue(1)} />
      <Star selected={value > 1} setValue={() => setValue(2)} />
      <Star selected={value > 2} setValue={() => setValue(3)} />
      <Star selected={value > 3} setValue={() => setValue(4)} />
      <Star selected={value > 4} setValue={() => setValue(5)} />
    </div>
  );
};
const Star = (props: StarType) => {
  return props.selected ? (
    <span onClick={() => props.setValue()}>
      <b>star</b>{' '}
    </span>
  ) : (
    <span onClick={() => props.setValue()}>star </span>
  );
};
