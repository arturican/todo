import React, { useState, useEffect } from 'react';

export default {
  title: 'Clock',
};

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const tick = () => {
      console.log('tik');
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{currentTime}</div>;
};

export const DefaultClock = () => <Clock />;
