import React, { ChangeEvent, memo, useState } from 'react';
import { TextField } from '@mui/material';

export type EditSpanProps = {
  title: string;
  callBack: (title: string) => void;
};

const EditSpanMemo = (props: EditSpanProps) => {
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
    <TextField color="primary" value={title} onBlur={editMode} autoFocus onChange={editTitle} />
  ) : (
    <span onDoubleClick={editMode}>{props.title}</span>
  );
};
export const EditSpan = memo(EditSpanMemo);
