import React, { useState } from "react";

export default function Portal(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Portal Example</h1>
      <button onClick={() => setIsOpen(true)}>Open!</button>
      <div>{isOpen ? <span>Open</span> : <span>Close</span>} 상태!</div>
      <div>
        {isOpen ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: 10,
              backgroundColor: "#cccccc",
              zIndex: 99,
              // position: "absolute",
              // left: 0,
              // top: 0,
            }}
          >
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
            <button onClick={() => setIsOpen(false)}>Close!</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
