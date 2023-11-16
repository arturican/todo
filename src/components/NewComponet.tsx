import React from 'react';
import './style.css';
export const NewComponet = () => {
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ];

  return (
    <div>
      {topCars.map((t, index = 1) => {
        return (
          <table key={index} className={'table'}>
            <th key={index}>{t.manufacturer}</th>
            <td key={index}>{t.model}</td>
          </table>
        );
      })}
    </div>
  );
};
