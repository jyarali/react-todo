import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todos">
        <Todo title="1st todo" text="this is a 1" />
        <Todo title="2nd todo" text="this number goes to be 2" />
        <Todo title="number 3" text="third title here" />
      </div>
    </div>
  );
}

export default App;
