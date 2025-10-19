import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Read a book", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const maxId = todos.length ? Math.max(...todos.map(t => t.id)) : 0;
    setTodos([...todos, { id: maxId + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm onAdd={addTodo} />

      <ul data-testid="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>{" "}
            <button
              onClick={() => deleteTodo(todo.id)}
              data-testid={`delete-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
