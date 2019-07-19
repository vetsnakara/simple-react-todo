import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  const todoItems = todos.map(todo => (
    <TodoItem key={todo} text={todo} onDelete={onDelete} />
  ));

  return <ul>{todoItems}</ul>;
}

export default TodoList;
