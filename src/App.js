import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todos">
        <Todo title="1st todo" id="1" text="this is a 1" />
        <Todo title="2nd todo" id="2" text="this number goes to be 2" />
        <Todo title="number 3" id="3" text="third title here" />
      </div>
      <hr />
      <h2>add Todo</h2>
      <AddTodo />
    </div>
  );
}

export default App;
