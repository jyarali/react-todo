function Todo(props) {
  return (
    <div className="todo" id={`todo-${props.id}`}>
      <h2>{props.title}</h2>
      <div className="todo-body">{props.text}</div>
      <div className="actions">
        <button className="btn" onClick={() => props.handleRemove(props.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;
