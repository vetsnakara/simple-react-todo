import React, { Component } from "react";
import { Link } from "react-router-dom";

import TodoList from "./TodoList";
import AddItemForm from "./AddItemForm";

class Todo extends Component {
  render() {
    const { todos, onDelete, onAdd } = this.props;

    return (
      <div>
        <Link to="/about" style={{ display: "block", marginBottom: 15 }}>
          About
        </Link>

        <p>The busiest people have the most leisure ...</p>

        <AddItemForm onAdd={onAdd} />

        <TodoList todos={todos} onDelete={onDelete} />
      </div>
    );
  }
}

export default Todo;
