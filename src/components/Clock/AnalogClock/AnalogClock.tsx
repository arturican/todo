import React, { useEffect, useState } from 'react';

export const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const secondsRatio = time.getSeconds() / 60;
  const minutesRatio = (secondsRatio + time.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + time.getHours()) / 12;

  // Функция для расчёта позиций цифр
  const calculatePosition = (index: number, total: number) => {
    const angle = (360 / total) * index;
    const radius = 100; // предполагается, что радиус вашего циферблата 100 единиц
    // Преобразование полярных координат в декартовы
    const x = radius * Math.sin((angle * Math.PI) / 180);
    const y = radius * Math.cos((angle * Math.PI) / 180);
    return { x, y };
  };

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hoursRatio * 360}deg)` }}></div>
      <div className="hand minute" style={{ transform: `rotate(${minutesRatio * 360}deg)` }}></div>
      <div className="hand second" style={{ transform: `rotate(${secondsRatio * 360}deg)` }}></div>
      <div className="center-point"></div>
      {/* Добавление цифр на циферблат */}
      {Array.from({ length: 12 }).map((_, index) => {
        const position = calculatePosition(index + 1, 12);
        return (
          <div
            key={index}
            className="number"
            style={{
              position: 'absolute',
              left: `calc(50% + ${position.x}px)`,
              top: `calc(50% - ${position.y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
