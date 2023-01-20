import { useState, useEffect } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDoArray, setToDoArray] = useState([]);
  const onChange = (event) => setToDo((data) => event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoArray((currentArray) => [toDo, ...currentArray]);
    setToDo((data) => "");
  };
  return (
    <div>
      <h1>My To Do List ({toDoArray.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
