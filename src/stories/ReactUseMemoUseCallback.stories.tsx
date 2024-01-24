import React, { useCallback, useMemo, useState } from 'react';
export default {
  title: 'useMemo',
};
/*export const Example  = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=>{
        for (let i=1; i <= a; i++){
            let fake = 0
            while (fake < 10000000){
                fake++;
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    },[a])


    for (let i=1; i <= b; i++){resultB = resultB * i}
    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
            Result for a: {resultB}
        </div>
    </>
}*/

export const DifficultCountingExample = () => {};
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
export const HelpToReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Art', 'Dil', 'Vas']);

  const newArray = useMemo(() => {
    const newArray = users.filter((u) => u.toLowerCase().indexOf('a') > -1);
    return newArray;
  }, [users]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setUsers(['lol'])}></button>
      {counter}
      <Users users={newArray} />
    </>
  );
};

export const LikeUseCallBack = () => {
  console.log('Like');
  const [counter, setCounter] = useState(0);
  const [book, setBook] = useState(['Art', 'Dil', 'Vas']);

  const memoizedAddBook = useCallback(() => {
    console.log(book);
    const newBook = [...book, 'Art' + new Date().getTime()];
    setBook(newBook);
  }, [book]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Book addBook={memoizedAddBook} />
    </>
  );
};

const BookSecret = (props: { addBook: () => void }) => {
  console.log('BookSecret');
  return <button onClick={props.addBook}>addBook</button>;
};

const Book = React.memo(BookSecret);
