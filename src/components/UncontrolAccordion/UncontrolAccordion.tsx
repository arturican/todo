import React, { useState } from 'react';

type Accordion = {
  title: string;
};
type AccordionTitleType = {
  title: string;
};
export const UncontrolAccordion = (props: Accordion) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);
  return (
    <div>
      <h3 onClick={() => setCollapsed(!collapsed)}>
        <AccordionTitle title={props.title} />
      </h3>
      {collapsed && <AccordionBody />}
    </div>
  );
};
const AccordionTitle = (props: AccordionTitleType) => {
  return <h3>{props.title}</h3>;
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
