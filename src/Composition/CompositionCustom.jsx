import React from "react";
import Composition from "./Composition";

export default function CompositionCustom(props) {
  return (
    <Composition>
      <h1>TITLE : {props.title}</h1>
      <h4>DESC : {props.desc}</h4>
    </Composition>
  );
}
