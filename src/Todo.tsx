import React from "react";
import { useState } from "react";
export const Todo = () => {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const handleadd = () => {
    console.log("added task", todo);
    if (todo.trim()) {
      setTasks([...tasks, todo]);
      setTodo("");
    }
  };
  const handleDelete = () => {
    console.log("deleting all tasks");
    setTasks([]);
  };
  return (
    <div>
      <h2>TODO Planner</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add the task"
      />
      <ul>
        {tasks.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
      
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleadd}>Add Task</button>
    </div>
  );
};
