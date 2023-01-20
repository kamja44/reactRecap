import { useState, useEffect } from "react";
import styles from "./App.module.css";
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
    <div className={styles.Container}>
      <h1 className={styles.h1}>My To Do List ({toDoArray.length})</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.input}
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button className={styles.button}>Add To Do</button>
      </form>
      <ul className={styles.ul}>
        {toDoArray.reverse().map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
