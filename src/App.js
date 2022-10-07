import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import uniqid from "uniqid";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("react-todo"))?.todos || []);

  function handleRemove(id) {
    const del = window.confirm("Are you Sure?");
    if (del) {
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
      localStorage.setItem("react-todo", JSON.stringify({ todos: newTodos }));
    }
  }

  function handleAdd(title, text) {
    const newTodos = [
      ...todos,
      {
        id: uniqid(),
        title: title,
        text: text,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("react-todo", JSON.stringify({ todos: newTodos }));
  }

  const listTodos = todos.map((todo) => (
    <Todo
      key={todo.id}
      title={todo.title}
      text={todo.text}
      id={todo.id}
      handleRemove={handleRemove}
    />
  ));

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todos">{listTodos}</div>
      <hr />
      <h2>add Todo</h2>
      <AddTodo handleAdd={handleAdd} />
    </div>
  );
}

export default App;
