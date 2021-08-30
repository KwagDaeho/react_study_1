import "./App.css";

const text = "Hello REACT!";
const titleClassName = "title_class";
const myProps = { className: titleClassName, children: text };
const elementTitle = <h1 {...myProps} />; /* 스프레드 연산자 */
const elementSub = <h2>WHAT IS THIS?</h2>;
const part = (title, desc) => (
  <>
    <h1>
      {title}, {desc}
    </h1>
  </>
);
const parts = (
  <>
    {part("GOOD", "good")}
    {part("BAD", "bad")}
    {part("NICE", "nice")}
  </>
);
function App() {
  return (
    <div className="App">
      {elementTitle}
      {elementSub}
      {parts}
    </div>
  );
}

export default App;
