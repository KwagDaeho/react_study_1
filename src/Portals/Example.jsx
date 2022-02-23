import React from "react";
import { createPortal } from "react-dom";
import Portal from "./Portal";

const MyPortal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};
export default function Example() {
  return (
    <div>
      <MyPortal>
        <Portal />
      </MyPortal>
      <div style={{ position: "absolute" }}>Test</div>
    </div>
  );
}
