import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todo from "./components/Todo";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Todo} />
        <Route path="/about/" component={About} />
      </Router>
    );
  }
}

export default App;
