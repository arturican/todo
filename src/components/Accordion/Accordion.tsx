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
export const AccordionMemo = (props: Accordion) => {
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onChange} />
      {!props.collapsed && <AccordionBody items={props.items} />}
    </div>
  );
};
const AccordionTitleMemo = (props: AccordionTitleType) => {
  return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
};

type AccordionBodyType = {
  items: Item[];
};
const AccordionBodyMemo = (props: AccordionBodyType) => {
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

export const Accordion = React.memo(AccordionMemo);
export const AccordionTitle = React.memo(AccordionTitleMemo);
export const AccordionBody = React.memo(AccordionBodyMemo);
