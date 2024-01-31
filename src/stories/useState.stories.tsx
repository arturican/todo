import React, { useState } from 'react';
export default {
  title: 'useState',
};

const generation = () => {
  console.log('generation');
  return 1;
};

export const Example = () => {
  console.log('useState');
  const changer = (state: number) => state + 1;
  const [counter, setCounter] = useState(generation);
  return (
    <>
      {counter}
      <button onClick={() => setCounter(changer)}>+</button>
    </>
  );
};
