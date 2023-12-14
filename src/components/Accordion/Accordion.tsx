import React from 'react';

type Item = {
  title: string;
  value: number;
};
type Accordion = {
  title: string;
  onChange: () => void;
  collapsed: boolean;
  items: Item[];
};
type AccordionTitleType = {
  title: string;
  onClick: () => void;
};
export const Accordion = (props: Accordion) => {
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onChange} />
      {!props.collapsed && <AccordionBody items={props.items} />}
    </div>
  );
};
const AccordionTitle = (props: AccordionTitleType) => {
  return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
};

type AccordionBodyType = {
  items: Item[];
};
const AccordionBody = (props: AccordionBodyType) => {
  return (
    <ul>
      {props.items.map((v, i) => (
        <li key={i} onClick={() => alert(v.value)}>
          {v.title}
        </li>
      ))}
    </ul>
  );
};
