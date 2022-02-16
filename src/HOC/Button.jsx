import React from "react";
import withLoading from "./withLoading";

function Button() {
  return (
    <div>
      <button>HOC - Button</button>
    </div>
  );
}

export default withLoading(Button);
