import React, { useState } from "react";

export default function Composition2(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h3>Dialog</h3>
      <button onClick={() => setIsOpen(true)}>Open!</button>
      <button onClick={() => setIsOpen(false)}>Close!</button>
      <div>{isOpen ? <span>Open</span> : <span>Close</span>} 상태!</div>
      <div>
        {isOpen ? (
          <div>
            {typeof props.title === "string" ? (
              <h3>Open Title : {props.title}</h3>
            ) : (
              props.title
            )}
            {typeof props.desc === "string" ? (
              <h5>Open Desc : {props.desc}</h5>
            ) : (
              props.desc
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
