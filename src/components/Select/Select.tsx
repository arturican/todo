import React, { useState, KeyboardEvent, useEffect } from 'react';
import './Select.css';

export type ItemType = {
  value: string | null;
  title: string;
};

export type SelectProps = {
  value: string | null;
  items: ItemType[];
  onChange: (value: string | null) => void;
};

export const Select = (props: SelectProps) => {
  const [active, setActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(props.value);
  const selectItem = props.items.find((el) => el.value === props.value);
  const hoveredItem = props.items.find((el) => el.value === hoveredElement);

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
        if (props.items[i].value === hoveredElement) {
          const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
        }
      }
      if (!selectItem) {
        props.onChange(props.items[0].value);
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false);
    }
  };
  return (
    <div onKeyUp={onKeyUp} tabIndex={0}>
      <span className={'main'} onClick={toggleItems}>
        {selectItem && selectItem.title}
      </span>
      {active && (
        <div className={'items'}>
          {props.items.map((el) => (
            <div
              key={el.value}
              onMouseEnter={() => setHoveredElement(el.value)}
              className={hoveredItem === el ? 'selected' : ''}
              onClick={() => onItemClick(el.value)}
            >
              {el.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
