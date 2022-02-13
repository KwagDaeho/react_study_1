import React from "react";

export default function ListComponent() {
  function ListItem(props) {
    return <li> No : {props.value}</li>;
  }
  function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) => (
          <ListItem key={number.toString()} value={number} />
        ))}
      </ul>
    );
  }
  const listNumbers = [1, 2];
  const todos = [
    { id: 1, inner: "work1" },
    { id: 2, inner: "work2" },
  ];

  const Items = (props) => {
    return <li>{props.inner}</li>;
  };
  const todoList = todos.map((todo) => (
    <Items key={todo.id} inner={todo.inner} />
  ));
  return (
    <div>
      <h1>List Component</h1>
      <div>
        <NumberList numbers={listNumbers} />
        <ol>{todoList}</ol>
      </div>
    </div>
  );
}
