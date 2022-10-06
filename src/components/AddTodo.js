function AddTodo() {
  return (
    <div className="addtodo">
      <input type="text" placeholder="Titile" className="todotitle" />
      <input type="text" placeholder="Text" className="todotext" />
      <button className="btn">Add</button>
    </div>
  );
}

export default AddTodo;
