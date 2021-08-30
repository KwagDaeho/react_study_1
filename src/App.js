import "./App.css";
import React, { useState } from "react";
const text = "Hello REACT!";
const titleClassName = "title_class";
const myProps = { className: titleClassName, children: text };
const elementTitle = <h1 {...myProps} />; /* 스프레드 연산자 */
const elementSub = <h2>WHAT IS THIS?</h2>;
const part = (title, desc) => (
  <>
    <h1>
      {title}, {desc}
    </h1>
  </>
);
const parts = (
  <>
    {part("GOOD", "good")}
    {part("BAD", "bad")}
    {part("NICE", "nice")}
  </>
);

function App() {
  const [keyword, setKeyword] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [result, setResult] = React.useState(false);

  function handleChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }
  function handleClick() {
    setTyping(false);
    setResult(`We find result of ${keyword}`);
  }

  const lastResult = (
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
      <p>{typing ? `Looking for....${keyword}` : result}</p>
    </>
  );
  return (
    <div className="App">
      {elementTitle}
      {elementSub}
      {parts}
      {lastResult}
    </div>
  );
}

export default App;
