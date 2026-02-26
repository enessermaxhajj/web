import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      {todos.map((t, i) => (
        <p key={i}>{t.text}</p>
      ))}
    </div>
  );
}

export default App;