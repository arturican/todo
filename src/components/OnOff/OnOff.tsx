import React from 'react';

type OnOffProps = {
  on?: boolean;
  onClick?: () => void;
};
export const OnOff = (props: OnOffProps) => {
  const styleButtonOff = {
    border: '2px solid #ccc',
    margin: '10px',
    width: '100px',
    height: '100px',
    background: props.on ? 'white' : 'red',
  };

  const styleButtonOn = {
    border: '2px solid #ccc',
    margin: '10px',
    width: '100px',
    height: '100px',
    background: props.on ? 'green' : 'white',
  };

  const styleCircle = {
    border: '2px solid #ccc',
    borderRadius: '50%',
    margin: '10px',
    width: '100px',
    height: '100px',
    background: props.on ? 'green' : 'red',
  };

  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      <div style={styleButtonOn} onClick={props.onClick}>
        <span>ON</span>
      </div>
      <div style={styleButtonOff} onClick={props.onClick}>
        OFF
      </div>
      <div style={styleCircle}></div>
    </div>
  );
};
