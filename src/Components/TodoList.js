import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoList() {
  //State array which will handle all the TODOs
  const [todos, setTodos] = useState([]);


  //Add todo to list
  const addTask = task => {
    if(!task.text){
      return
    }

    const newTodos = [task, ...todos];
    setTodos(newTodos);
  };


  //Remove todo from list

  const removeTask = id => {
    let updatedTask = [...todos].filter(task => task.id !== id)

    setTodos(updatedTask)
  }

  //task is completed
  const completeTask = id =>{
    let updatedTask = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = true;
      }

      return todo;
    })
    setTodos(updatedTask)
  }


  return <div>
    <TodoForm addTask={addTask}></TodoForm>
    <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
  </div>;
}
