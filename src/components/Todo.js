function Todo(props) {
  function remove() {
    const elm = document.getElementById("todo-" + props.id);
    elm.remove();
  }
  return (
    <div className="todo" id={`todo-${props.id}`}>
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
