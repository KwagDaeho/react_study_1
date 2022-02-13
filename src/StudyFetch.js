import React from "react";

const StudyFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let result = myJson.data.people;
        result.map((person, index) => {
          person.id = index;
        });
        setData(result);
      })
      .catch((error) => {
        setError(`ERROR!! :: ${error.message}`);
      });
  }, []);
  if (error != null) {
    return <p>{error}</p>;
  }
  if (data == null) {
    return <p>Loding ....</p>;
  }
  const Persons = (props) => {
    return (
      <li>
        name : {props.name}
        <br />
        age : {props.age}
        <br />
        key : {props.id}
        <br />
      </li>
    );
  };
  const myPersonList = data.map((person) => (
    <Persons
      key={person.id}
      name={person.name}
      age={person.age}
      id={person.id}
    />
  ));

  const todos = [
    { id: 1, inner: "work1" },
    { id: 2, inner: "work2" },
    { id: 3, inner: "work3" },
    { id: 4, inner: "work4" },
  ];

  const Items = (props) => {
    return <li>{props.inner}</li>;
  };
  const todoList = todos.map((todo) => <Items key={todo.id} {...todo} />);
  return (
    <div>
      <br />
      <br />
      <p>People</p>
      <ol>{todoList}</ol>
      <ol>{myPersonList}</ol>
    </div>
  );
};

export default StudyFetch;
