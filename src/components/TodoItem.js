import React from "react";
import "../styles/todo-item.css";

function TodoItem({ text, onDelete }) {
  return (
    <li>
      <div className="todo-item">
        <span className="item-name">{text}</span>
        <button className="item-remove" onClick={() => onDelete(text)}>
          x
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
