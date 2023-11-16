import React from 'react';

type StudentsType = {
  id: number;
  name: string;
  age: number;
};
type NewComponetType = {
  students: StudentsType[];
};

export const NewComponet = (props: NewComponetType) => {
  return (
    <div>
      {props.students.map((s) => (
        <li key={s.id}>{s.name}</li>
      ))}
    </div>
  );
};
