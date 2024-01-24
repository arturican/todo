import type { Meta, StoryObj } from '@storybook/react';
import { ItemType, Select } from './Select';
import { useMemo, useState } from 'react';
import React from 'react';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  excludeStories: ['SelectWithValue', 'SelectOutValue'],
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

const SelectWithValueMemo = () => {
  console.log('lol');
  const contries: ItemType[] = [
    { id: '1', idCountry: 'Russia', city: 'Moscow', people: '12 mill' },
    { id: '2', idCountry: 'Russia', city: 'Saint Petersburg', people: '5.3 mill' },
    { id: '3', idCountry: 'USA', city: 'New York', people: '8.4 mill' },
    { id: '4', idCountry: 'USA', city: 'Los Angeles', people: '4 mill' },
    { id: '5', idCountry: 'France', city: 'Paris', people: '2.1 mill' },
    { id: '6', idCountry: 'UK', city: 'London', people: '8.9 mill' },
    { id: '7', idCountry: 'Japan', city: 'Tokyo', people: '9.3 mill' },
    { id: '8', idCountry: 'China', city: 'Beijing', people: '21 mill' },
    { id: '9', idCountry: 'India', city: 'Mumbai', people: '20 mill' },
    { id: '10', idCountry: 'Brazil', city: 'Sao Paulo', people: '12.2 mill' },
  ];
  const [value, setValue] = useState<string | null>('2');
  const [counter, setCounter] = useState<number>(0);
  const newArray = useMemo(() => {
    if (value) {
      for (let i = 1; i <= +value; i++) {
        let fake = 0;
        while (fake < 10000000) {
          fake++;
          const fakeValue = Math.random();
          console.log(fakeValue);
        }
      }
    }
    const newArray = contries.filter((u) => u.idCountry === 'Russia');
    return newArray;
  }, [contries]);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Select value={value} onChange={setValue} items={newArray} />
    </>
  );
};
export const SelectWithValue = React.memo(SelectWithValueMemo);

const SelectOutValueMemo = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Select
      value={value}
      onChange={setValue}
      items={[
        { id: '1', idCountry: 'Russia', city: 'Moscow', people: '12 mill' },
        { id: '2', idCountry: 'Russia', city: 'Saint Petersburg', people: '5.3 mill' },
        { id: '3', idCountry: 'USA', city: 'New York', people: '8.4 mill' },
        { id: '4', idCountry: 'USA', city: 'Los Angeles', people: '4 mill' },
        { id: '5', idCountry: 'France', city: 'Paris', people: '2.1 mill' },
        { id: '6', idCountry: 'UK', city: 'London', people: '8.9 mill' },
        { id: '7', idCountry: 'Japan', city: 'Tokyo', people: '9.3 mill' },
        { id: '8', idCountry: 'China', city: 'Beijing', people: '21 mill' },
        { id: '9', idCountry: 'India', city: 'Mumbai', people: '20 mill' },
        { id: '10', idCountry: 'Brazil', city: 'Sao Paulo', people: '12.2 mill' },
      ]}
    />
  );
};

export const SelectOutValue = React.memo(SelectOutValueMemo);

export const WithValue: Story = {
  render: () => <SelectWithValue />,
};

export const WithOutValue: Story = {
  render: () => <SelectOutValue />,
};
