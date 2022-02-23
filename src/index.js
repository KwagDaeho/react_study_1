import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import App from "./App";
// import Form1 from "./Form1";
// import Form2 from "./Form2";
// import Error from "./Error";
// import StudyFetch from "./StudyFetch";
// import Test from "./Test";
// import FunctionalComponent from "./_FuntionalComponent";
// import ClassComponent from "./_ClassComponent";
// import StudyCode from "./_StudyCode";
// import ListComponent from "./_ListComponent";
// import ControlledComponent from "./_ControlledComponent";
// import UnControlledComponent from "./_UnControlledComponent";
// import UseHooks from "./UseHooks";
// import UseReducer from "./UseReducer";
// import CompositionWelcome from "./Composition/CompositionWelcome";
// import Composition2wrap from "./Composition/Composition2wrap";
// import Input from "./HOC/Input";
// import Button from "./HOC/Button";
// import ContextPage from "./Context/ContextPage";
// import Memo from "./Memoization/Memo";
// import Example from "./Portals/Example";
import Component from "./PropTypes/Component";

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Form1 />
    <Form2 />
    <Error />
    <StudyFetch />
    <Test />
    <ClassComponent />
    <FunctionalComponent />
    <ListComponent />
    <StudyCode />
    <ControlledComponent />
    <UnControlledComponent />
    <UseHooks />
    <UseRedu{cer />
    <CompositionWelcome />
    <Composition2wrap />
    <Input />
    <Button />
    <ContextPage />
    <Memo />} */}
    {/* <Example /> */}
    <Component />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
