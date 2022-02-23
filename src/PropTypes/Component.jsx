import React from "react";
import PropTypes from "prop-types";

function PropComponent(props) {
  return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
  name: "Haraho",
  age: 30,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: function (props, propName, componentName) {
    if (!/7|30/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          ":" +
          props[propName] +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed. WARN!!!"
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
