import React from 'react';

type Accordion = {
  title: string;
  onClick: () => void;
  collapsed: boolean;
};
type AccordionTitleType = {
  title: string;
  onClick: () => void;
};
export const Accordion = (props: Accordion) => {
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onClick} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
};
const AccordionTitle = (props: AccordionTitleType) => {
  return <h3 onClick={props.onClick}>{props.title}</h3>;
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
