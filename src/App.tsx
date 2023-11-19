import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';

export type PageTitleType = {
  title: string;
};
function App() {
  return (
    <div>
      <PageTitle title={'This is App component<'} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion title={'Menu'} collapsed={true} />
      <Accordion title={'Users'} collapsed={false} />
      <OnOff on={true} />
      <OnOff on={false} />
    </div>
  );
}
const PageTitle = (props: PageTitleType) => {
  return <h3>{props.title}</h3>;
};

export default App;
