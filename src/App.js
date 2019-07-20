import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Todo from "./components/Todo";
import About from "./components/About";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleDelete(todoText) {
    this.setState({
      todos: this.state.todos.filter(text => text !== todoText)
    });
  }

  handleAddTodo(text) {
    this.setState({
      todos: [...this.state.todos, text]
    });
  }

  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <Todo
              todos={this.state.todos}
              onAdd={this.handleAddTodo}
              onDelete={this.handleDelete}
            />
          )}
        />{" "}
        <Route path="/about/" component={About} />
      </Router>
    );
  }
}

export default App;
