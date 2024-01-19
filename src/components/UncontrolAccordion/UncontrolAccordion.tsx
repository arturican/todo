import React, { useState } from 'react';

type Accordion = {
  title: string;
};
type AccordionTitleType = {
  title: string;
  onClick: () => void;
};
const UncontrolAccordionMemo = (props: Accordion) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);
  return (
    <div>
      <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)} />
      {collapsed && <AccordionBody />}
    </div>
  );
};

export const UncontrolAccordion = React.memo(UncontrolAccordionMemo);
const AccordionTitleMemo = (props: AccordionTitleType) => {
  return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
};
export const AccordionTitle = React.memo(AccordionTitleMemo);
const AccordionBodyMemo = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

export const AccordionBody = React.memo(AccordionBodyMemo);
