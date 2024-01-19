import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolOnOff } from './components/UncontrolOnOff/UncontrolOnOff';
import { UncontrolAccordion } from './components/UncontrolAccordion/UncontrolAccordion';
import { RatingValue, UncontrolRating } from './components/UncontrolRating/UncontrolRating';
import { InputCheckbox } from './components/Input/Input.stories';

export type PageTitleType = {
  title: string;
};

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValue>(0);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [on, setOn] = useState<boolean>(true);
  return (
    <div>
      <PageTitle title={'This is App component'} />
      <Rating value={ratingValue} callBack={setRatingValue} />
      <Accordion
        title={'Menu'}
        onChange={() => setCollapsed(!collapsed)}
        collapsed={collapsed}
        items={[
          { title: 'Art', value: 1 },
          { title: 'Dil', value: 2 },
          { title: 'Mosk', value: 3 },
        ]}
      />
      <OnOff on={on} onClick={() => setOn(!on)} />
      <UncontrolOnOff />
      <UncontrolAccordion title={'List'} />
      <UncontrolRating />
      <InputCheckbox />
    </div>
  );
}

const PageTitle = (props: PageTitleType) => {
  return <h3>{props.title}</h3>;
};

export default App;
