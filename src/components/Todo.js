import React, { Component } from "react";
import { Link } from "react-router-dom";

import TodoList from "./TodoList";
import AddItemForm from "./AddItemForm";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  handleDelete(todoText) {
    this.setState({
      todos: this.state.todos.filter(text => text !== todoText)
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleAddTodo(text) {
    this.setState({
      todos: [...this.state.todos, text]
    });
  }

  componentWillMount() {
    console.log("  App:componentWillMount");
  }

  componentDidMount() {
    console.log("  App:componentDidMount");
  }

  componentWillUpdate() {
    console.log("  App:componentWillUpdate");
  }

  render() {
    console.log("  App:render");

    return (
      <div>
        <Link to="/about" style={{ display: "block", marginBottom: 15 }}>
          About
        </Link>

        <p>The busiest people have the most leisure ...</p>

        <AddItemForm
          text={this.state.newTodo}
          onAdd={this.handleAddTodo.bind(this)}
        />

        <TodoList
          todos={this.state.todos}
          onDelete={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

export default Todo;
