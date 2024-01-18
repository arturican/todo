import React, { useState } from 'react';
export default {
  title: 'React.memo demo',
};

const NewMessageCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('users');
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);
export const Example = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Art', 'Dil', 'Vas']);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setUsers([...users, 'Lol ' + new Date().getTime()])}>add user</button>
      <NewMessageCounter count={counter} />
      <Users users={users} />
    </>
  );
};
