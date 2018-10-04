import React from "react";

const TodoForm = ({
  handleSubmit,
  handleChange,
  nextPosition,
  currentText
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">What needs to be done?</label>
      <input id="new-todo" onChange={handleChange} value={currentText} />
      <button>Add #{nextPosition}</button>
    </form>
  );
};

export default TodoForm;
