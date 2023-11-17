import React, { useState } from 'react';
import { Button } from './components/Button';

export const App = () => {
  type FilterType = 'all' | 'Dollars' | 'RUBLS';
  const [filter, setFilter] = useState<FilterType>('all');
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]);
  filter;
  const filteredMoney = (filter: FilterType) => {
    setFilter(filter);
    if (filter === 'Dollars') {
      setMoney(money.filter((m) => m.banknots === 'Dollars'));
    }
    if (filter === 'RUBLS') {
      setMoney(money.filter((m) => m.banknots === 'RUBLS'));
    }
  };

  return (
    <div>
      <Button name={'all'} callBack={() => filteredMoney('all')} />
      <Button name={'dollars'} callBack={() => filteredMoney('Dollars')} />
      <Button name={'rubls'} callBack={() => filteredMoney('RUBLS')} />
      {money.map((item) => (
        <div key={item.number}>
          {item.banknots} {item.value} {item.number}
        </div>
      ))}
    </div>
  );
};
