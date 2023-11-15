import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      This is App component
      <Rating />
      <Accordion />
    </div>
  );
}

const Rating = () => {
  return (
    <div>
      <span>star</span>
      <span>star</span>
      <span>star</span>
      <span>star</span>
    </div>
  );
};

const Accordion = () => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default App;
