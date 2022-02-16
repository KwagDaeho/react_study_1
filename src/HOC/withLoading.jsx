import React, { useState, useEffect } from "react";

export default function withLoading(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);

      return () => {
        clearTimeout(timer);
      };
    }, []);
    return loading ? (
      <div>{Component.name} Loading...</div>
    ) : (
      <Component {...props} />
    );
  };
  return WithLoadingComponent;
}
