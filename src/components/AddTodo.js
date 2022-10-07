import { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleText(event) {
    setText(event.target.value);
  }
  function handleReset() {
    setText("");
    setTitle("");
  }
  return (
    <div className="addtodo">
      <input
        type="text"
        value={title}
        onChange={handleTitle}
        placeholder="title"
        className="todotitle"
      />
      <input
        type="text"
        value={text}
        onChange={handleText}
        placeholder="Text"
        className="todotext"
      />
      <button
        className="btn"
        onClick={() => {
          handleReset();
          return props.handleAdd(title, text);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
