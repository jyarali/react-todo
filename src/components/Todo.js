function Todo(props) {
  function remove() {
    console.log("deleted");
  }
  return (
    <div className="todo">
      <h2>{props.title}</h2>
      <div className="todo-body">{props.text}</div>
      <div className="actions">
        <button className="btn" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;
