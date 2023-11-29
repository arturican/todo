import React, { useState } from 'react';

type Accordion = {
  title: string;
};
type AccordionTitleType = {
  title: string;
  onClick: () => void;
};
export const UncontrolAccordion = (props: Accordion) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);
  return (
    <div>
      <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)} />
      {collapsed && <AccordionBody />}
    </div>
  );
};
const AccordionTitle = (props: AccordionTitleType) => {
  return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
};
const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
