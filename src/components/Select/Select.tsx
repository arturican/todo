import React, { useState, KeyboardEvent, useEffect, SetStateAction, Dispatch } from 'react';
import './Select.css';

export type ItemType = {
  id: string;
  idCountry: string;
  city: string;
  people: string;
};

export type SelectProps = {
  value: string | null;
  items: ItemType[];
  onChange: Dispatch<SetStateAction<string | null>>;
};

const SelectMemo = (props: SelectProps) => {
  console.log('select');
  const [active, setActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(props.value);
  const selectItem = props.items.find((el) => el.id === props.value);
  const hoveredItem = props.items.find((el) => el.id === hoveredElement);

  useEffect(() => {
    setHoveredElement(props.value);
  }, [props.value]);

  const toggleItems = () => setActive(!active);
  const onItemClick = (value: string | null) => {
    props.onChange(value);
    toggleItems();
  };

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].id === hoveredElement) {
          const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.id);
            return;
          }
        }
      }
      if (!selectItem) {
        props.onChange(props.items[0].id);
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false);
    }
  };
  return (
    <div onKeyUp={onKeyUp} tabIndex={0}>
      <span className={'main'} onClick={toggleItems}>
        {selectItem && selectItem.city}
      </span>
      {active && (
        <div className={'items'}>
          {props.items.map((el) => (
            <div
              key={el.id}
              onMouseEnter={() => setHoveredElement(el.id)}
              className={hoveredItem === el ? 'selected' : ''}
              onClick={() => onItemClick(el.id)}
            >
              {el.city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Select = React.memo(SelectMemo);
