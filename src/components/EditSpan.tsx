import React, { ChangeEvent, useState } from 'react';
import { TextField } from '@mui/material';

export type EditSpanProps = {
  value: string;
  onChange: (title: string) => void;
};
export const EditSpan = (props: EditSpanProps) => {
  const [title, setTitle] = useState(props.value);
  const [mode, setMode] = useState(false);
  const editMode = () => {
    setMode(!mode);
    if (mode) updateTask();
  };

  const editTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const updateTask = () => props.onChange(title);

  return mode ? (
    <TextField color="primary" value={title} onBlur={editMode} autoFocus onChange={editTitle} />
  ) : (
    <span onDoubleClick={editMode}>{props.value}</span>
  );
};
