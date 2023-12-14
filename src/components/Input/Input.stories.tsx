import React, { ChangeEvent, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const InputWithHooks = () => {
  const [value, setValue] = useState('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <Input value={value} onChange={handleOnChange} /> - {value}
    </>
  );
};

export const ControlInput: Story = {
  render: () => <InputWithHooks />,
};

export const InputTypeNumber: Story = {
  args: {
    type: 'number',
  },
};

export const Default: Story = {};

const InputWithRefHooks = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>save</button> - actual value: {value}
    </>
  );
};

export const ControlValueOfUnconrolledInputByButtonPress: Story = {
  render: () => <InputWithRefHooks />,
};

export const InputCheckbox = () => {
  const [value, setValue] = useState(false);
  return <input type={'checkbox'} checked={value} onChange={(event) => setValue(event.currentTarget.checked)} />;
};

export const InputSelect = () => {
  const [value, setValue] = useState('0');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <select value={value} onChange={onChange}>
      <option value={1}>Kazan</option>
      <option value={2}>Almet</option>
      <option value={3}>Moscow</option>
      <option value={0}>none</option>
    </select>
  );
};
