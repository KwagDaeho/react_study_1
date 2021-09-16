import "./App.css";
import React, { useState } from "react";
const text = "Hello REACT!";
const titleClassName = "title_class";
const myProps = { className: titleClassName, children: text };
const elementTitle = <h1 {...myProps} />; /* 스프레드 연산자 */
const elementSub = <h2>WHAT IS THIS?</h2>;

// use~~ 가 Hook 입니다.
const part = (title, desc) => (
  <h1>
    {title}, {desc}
  </h1>
);
const parts = (
  <>
    {part("GOOD", "good")}
    {part("BAD", "bad")}
    {part("NICE", "nice")}
  </>
);

function App() {
  console.log("App render start");
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
  const [show, setShow] = React.useState(() => {
    console.log("App use state");
    return false;
  });
  const [text, setText] = React.useState(() => {
    console.log("child useState");
    return "";
  });

  React.useEffect(() => {
    console.log("App useEffect, no deps");
  });
  React.useEffect(() => {
    console.log("App useEffect, empty deps");
  }, []);
  React.useEffect(() => {
    console.log("App useEffect, [show]");
  }, [show]);
  // useEffect 는 렌더가 완료된 후에 작동한다.
  React.useEffect(() => {
    console.log("child useEffect, no deps");
    return () => {
      console.log("child useEffect[CLEAN UP], no deps");
    };
  });
  // clean up >> parent first
  React.useEffect(() => {
    console.log("child useEffect, empty deps");
  }, []);
  React.useEffect(() => {
    console.log("child useEffect, [text]");
  }, [text]);

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
  function childHandleChange(e) {
    setText(e.target.value);
  }
  const child = () => {
    console.log("child render start");
    const element = (
      <>
        <input onChange={childHandleChange}></input>
        <p>{text}</p>
      </>
    );
    console.log("child render start");
    return element;
  };
  function hookFlow_handleClick() {
    setShow((prev) => !prev);
  }
  let hookFlow = (
    <>
      <button onClick={hookFlow_handleClick}>search</button>
      {show ? child() : null}
    </>
  );
  console.log("App render end");
  return (
    <div className="app">
      {elementTitle}
      {elementSub}
      {parts}
      {lastResult}
      {hookFlow}
    </div>
  );
}

export default App;
