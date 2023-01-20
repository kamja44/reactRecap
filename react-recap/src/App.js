import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((data) => data + 1);
  console.log("run all times");
  useEffect(() => console.log("Loading API..."), []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>ClickMe</button>
    </div>
  );
}

export default App;
