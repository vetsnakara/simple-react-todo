import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/index.css";

console.log("It works!");

const root = document.querySelector("#todo-wrapper");

ReactDOM.render(<App />, root);

module.hot.accept();
