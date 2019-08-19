import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexLogin from "./components/IndexLogin";

function App() {
  return (
    <Router>
      <Route path="/" exact component={IndexLogin} />
    </Router>
  );
}

export default App;
