import React, { ChangeEvent, useState } from 'react';

export type EditSpanProps = {
  title: string;
  callBack: (title: string) => void;
};
export const EditSpan = (props: EditSpanProps) => {
  const [title, setTitle] = useState(props.title);
  const [mode, setMode] = useState(false);
  const editMode = () => {
    setMode(!mode);
    if (mode) updateTask();
  };

  const editTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const updateTask = () => props.callBack(title);

  return mode ? (
    <input value={title} onBlur={editMode} autoFocus onChange={editTitle} />
  ) : (
    <span onDoubleClick={editMode}>{props.title}</span>
  );
};
