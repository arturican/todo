import React, { ChangeEvent, useState } from 'react';

type EditSpanType = {
  value: string;
  onChange: (title: string) => void;
};

export const EditSpan = (props: EditSpanType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.value);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const activeEditMode = () => {
    setEditMode(true);
    setTitle(title);
  };
  const activeViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };

  return editMode ? (
    <input value={title} onChange={onChangeHandler} onBlur={activeViewMode} autoFocus />
  ) : (
    <span onDoubleClick={activeEditMode}>{props.value}</span>
  );
};
