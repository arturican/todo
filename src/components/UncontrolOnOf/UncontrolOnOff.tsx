import React, { useState } from 'react';

export const UncontrolOnOff = () => {
  const [on, setOn] = useState(false);
  const styleButtonOff = {
    border: '2px solid #ccc',
    margin: '10px',
    width: '100px',
    height: '100px',
    background: on ? 'white' : 'red',
  };

  const styleButtonOn = {
    border: '2px solid #ccc',
    margin: '10px',
    width: '100px',
    height: '100px',
    background: on ? 'green' : 'white',
  };

  const styleCircle = {
    border: '2px solid #ccc',
    borderRadius: '50%',
    margin: '10px',
    width: '100px',
    height: '100px',
    background: on ? 'green' : 'red',
  };

  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      <div style={styleButtonOn} onClick={() => setOn(true)}>
        ON
      </div>
      <div style={styleButtonOff} onClick={() => setOn(false)}>
        OFF
      </div>
      <div style={styleCircle}></div>
    </div>
  );
};
