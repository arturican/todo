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
  const [value, setValue] = useState('None');
  const [mode, setMode] = useState(false);
  const onClickHandler = (title: string) => {
    setValue(title);
    setMode(!mode);
  };
  return (
    <div className={'select'}>
      {!mode ? (
        <div onClick={() => setMode(true)}>{value} </div>
      ) : (
        props.items.map((i) => (
          <div key={i.value} onClick={() => onClickHandler(i.title)} className={value === i.title ? 'selected' : ''}>
            {i.title}
          </div>
        ))
      )}
    </div>
  );
};
