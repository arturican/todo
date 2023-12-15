import React, { useState } from 'react';

export type ItemType = {
  value: string;
  title: string;
};

export type SelectProps = {
  value: string;
  items: ItemType[];
};

export const Select = (props: SelectProps) => {
  const [value, setValue] = useState('None');
  return (
    <div>
      <div>{value}</div>
      {props.items.map((i) => (
        <div key={i.value} onClick={() => setValue(i.title)}>
          {i.title}
        </div>
      ))}
    </div>
  );
};
