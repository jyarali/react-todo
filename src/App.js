import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [newId, setNewId] = useState(1);
  const [todos, setTodos] = useState([]);
  function handleRemove(id) {
    const del = window.confirm("Are you Sure?");
    if (del) {
      setTodos(todos.filter((item) => item.id !== id));
    }
  }
  function handleAdd(title, text) {
    setNewId(newId + 1);
    setTodos([
      ...todos,
      {
        id: newId,
        title: title,
        text: text,
      },
    ]);
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
      <h1 className="heading">My Todos</h1>
      <div className="container">
        <div className="TaskContainer">
          <h2>Add Todo</h2>
          <AddTodo className="addtodo" handleAdd={handleAdd} />
          <hr />
          <div className="todos">{listTodos}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
