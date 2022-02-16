import React from "react";
import withLoading from "./withLoading";

function Input() {
  return (
    <div>
      <input defaultValue="HOC - Input" />
    </div>
  );
}

export default withLoading(Input);
