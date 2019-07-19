import React, { Component } from "react";
import "../styles/add-item.css";

class AddItemForm extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { onAdd } = this.props;

    const input = this.inputRef.current;
    const todoText = input.value.trim();

    if (todoText) onAdd(todoText);

    input.value = "";
  }

  render() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Add something here ..."
          onChange={this.handleChange.bind(this)}
          ref={this.inputRef}
          autoFocus
        />
      </form>
    );
  }
}

export default AddItemForm;
