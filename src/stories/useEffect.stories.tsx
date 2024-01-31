import React, { useEffect, useState } from 'react';
export default {
  title: 'useEffect',
};

export const Example = () => {
  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);

  console.log('Example');

  useEffect(() => {
    console.log('useEffect every render');
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log('useEffect first render (componentDidMount)');
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log('useEffect first render and every counter change');
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello {counter} {fake}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setFake(fake + 1)}>+</button>
    </>
  );
};
