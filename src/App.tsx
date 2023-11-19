import React, { useState } from 'react';
import { Button } from './components/Button';
import { v1 } from 'uuid';

export type FilterType = 'all' | 'Dollars' | 'RUBLS';

export const App = () => {
  const [money /*, setMoney*/] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]);

  const [filter, setFilter] = useState<FilterType>('all');
  let filterMoney = money;
  if (filter === 'Dollars') {
    filterMoney = money.filter((m) => m.banknots === 'Dollars');
  }

  if (filter === 'RUBLS') {
    filterMoney = money.filter((m) => m.banknots === 'RUBLS');
  }

  const filteredMoney = (filter: FilterType) => {
    setFilter(filter);
  };

  return (
    <div>
      {filterMoney.map((m) => {
        return (
          <li key={v1()}>
            <span>{m.banknots}</span>
            <span>{m.number}</span>
            <span>{m.value}</span>
          </li>
        );
      })}
      <Button key={v1()} name={'all'} callBack={() => filteredMoney('all')} />
      <Button key={v1()} name={'dollars'} callBack={() => filteredMoney('Dollars')} />
      <Button key={v1()} name={'rubls'} callBack={() => filteredMoney('RUBLS')} />
    </div>
  );
};
