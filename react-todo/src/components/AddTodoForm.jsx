import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-form">
      <input
        data-testid="add-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit" data-testid="add-button">Add</button>
    </form>
  );
}
