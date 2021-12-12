import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/space-tourism-website-challenge">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
