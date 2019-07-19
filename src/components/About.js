import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <Link to="/" style={{ display: "block", marginBottom: 15 }}>
        Back
      </Link>
      <h1>About Page</h1>
    </React.Fragment>
  );
}

export default About;
