import React from "react";
function Error() {
  class ErrorBoundary extends React.Component {
    state = { error: null };
    static getDerivedStateFromError(error) {
      return { error };
    }

    render() {
      const { error } = this.state;
      if (error) {
        return <this.props.fallback error={error} />;
      }
      return this.props.children;
    }
  }
  const Child = () => {
    // throw new Error("Something WRONG...");
    return <div> child part..</div>;
  };
  const Fallback = ({ error }) => {
    alert(error.message);
    return <p>{error.message}</p>;
  };
  return (
    <>
      <ErrorBoundary fallback={Fallback}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default Error;
