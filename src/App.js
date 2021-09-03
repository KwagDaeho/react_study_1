import "./App.css";
import React, { useState } from "react";
const text = "Hello REACT!";
const titleClassName = "title_class";
const myProps = { className: titleClassName, children: text };
const elementTitle = <h1 {...myProps} />; /* 스프레드 연산자 */
const elementSub = <h2>WHAT IS THIS?</h2>;

// use~~ 가 Hook 입니다.
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
  function useLocalStorage(itemName, value = "") {
    const [state, setState] = React.useState(() => {
      return window.localStorage.getItem(itemName) || value;
    });
    React.useEffect(() => {
      window.localStorage.setItem(itemName, state);
    }, [state]);
    // 두번째 인자가 바뀔 때 실행됨
    return [state, setState];
  }
  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [typing, setTyping] = useLocalStorage("typing", false);
  const [result, setResult] = useLocalStorage("result");

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
      <input onChange={handleChange} value={keyword}></input>
      <button onClick={handleClick}>Search</button>
      <p>{typing ? `Looking for....${keyword}` : result}</p>
    </>
  );
  const [show, setShow] = React.useState(false);
  function hookFlow_handleClick() {
    setShow(true);
  }
  let hookFlow = (
    <>
      <button onClick="hookFlow_handleClick">search</button>
      {show ? (
        <>
          <input></input>
          <p></p>
        </>
      ) : null}
    </>
  );
  return (
    <div className="App">
      {elementTitle}
      {elementSub}
      {parts}
      {lastResult}
      {hookFlow}
    </div>
  );
}

export default App;
