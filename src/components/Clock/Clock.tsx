import React from 'react';
import './AnalogClock/AnalogClock.css'; // Assuming you have an accompanying CSS file for styling
import './Clock.css';
import { AnalogClock } from './AnalogClock/AnalogClock';
import { DigitalClock } from './DigitalClock/DigitalClock';

export const Clock = () => {
  return (
    <div className="wrapper">
      <DigitalClock />
      <AnalogClock />
    </div>
  );
};
