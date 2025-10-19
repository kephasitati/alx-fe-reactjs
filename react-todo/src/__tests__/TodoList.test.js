import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    // initial items from initialTodos: Buy milk, Walk the dog, Read a book
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    expect(screen.getByText("Read a book")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("add-input");
    const button = screen.getByTestId("add-button");

    fireEvent.change(input, { target: { value: "New task" } });
    fireEvent.click(button);

    expect(screen.getByText("New task")).toBeInTheDocument();
  });

  test("can toggle a todo's completion", () => {
    render(<TodoList />);
    // Walk the dog is initial completed true, but we will toggle Buy milk (id 1)
    const todoText = screen.getByTestId("todo-text-1");
    // Initially not completed => no line-through
    expect(todoText).toHaveStyle("text-decoration: none");

    // click to toggle
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through");

    // click again to un-toggle
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getByTestId("delete-2"); // delete "Walk the dog" (id 2)
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();

    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Walk the dog")).not.toBeInTheDocument();
  });
});
