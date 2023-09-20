import React, { useState } from "react";

export default function TodoForm(props) {
  //State
  const [input, setInput] = useState("");

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 100000),
      text: input,
      isComplete: false,
    });
    setInput('')
  };

  return (
    <form className="todo-form">
      <input type="text" placeholder="Add a TODO" value={input} name="text" onChange={handleChange} className="todo-input" />
      <button type="submit" onClick={handleSubmit} className="todo-button">
        Add Todo
      </button>
    </form>
  );
}
