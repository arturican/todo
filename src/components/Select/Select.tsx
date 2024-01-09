import React, { useState } from 'react';
import './Select.css';

export type ItemType = {
  value: string;
  title: string;
};

export type SelectProps = {
  value: string;
  items: ItemType[];
};

export const Select = (props: SelectProps) => {
  const [active, setActive] = useState(false);
  const selectItem = props.items.find((el) => el.value === props.value);
  const toggleItems = () => setActive(!active);
  return (
    <div>
      <span className={'main'} onClick={toggleItems}>
        {selectItem && selectItem.title}
      </span>
      {active && (
        <div className={'items'}>
          {props.items.map((el) => (
            <div key={el.value}>{el.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
