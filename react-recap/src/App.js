import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const onClick = () => setCounter((data) => data + 1);
  const onChange = (event) => setKeyWord(event.target.value);
  // console.log("run all times");
  useEffect(() => console.log("I run only once."), []);
  useEffect(() => {
    console.log(`keyword Changes`);
  }, [keyword]);
  useEffect(() => {
    console.log("coutner Changes");
  }, [counter]);
  useEffect(() => {
    console.log("keyword & conter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>ClickMe</button>
    </div>
  );
}

export default App;
