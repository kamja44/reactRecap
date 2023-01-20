import { useState, useEffect } from "react";
function Hello() {
  // function
  useEffect(function () {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);
  // arrow Function
  useEffect(() => {
    console.log("h1");
    return () => console.log("bye");
  }, []);
  // function 코드와 arrow Function코드는 서로 동일하다.
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((data) => !data);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Showing"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
