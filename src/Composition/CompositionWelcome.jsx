import React from "react";
import Composition from "./Composition";
import CompositionCustom from "./CompositionCustom";

export default function CompositionWelcome() {
  return (
    <div>
      <Composition>
        <h1>!! Welcome TITLE !!</h1>
        <h4> I am Haraho. THIS IS JUST TEXT </h4>
      </Composition>
      <CompositionCustom title=" CUSTOM TITLE " desc=" CUSTOM DESC " />
    </div>
  );
}
