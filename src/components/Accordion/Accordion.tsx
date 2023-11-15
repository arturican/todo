import React from 'react';

type Accordion = {
  title: string;
  collapsed: boolean;
};
type AccordionTitleType = {
  title: string;
};
export const Accordion = (props: Accordion) => {
  return (
    <div>
      <AccordionTitle title={props.title} />
      {!props.collapsed ? <AccordionBody /> : ''}
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
