import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexLogin from "./components/IndexLogin";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <Router>
      <Route path="/" exact component={IndexLogin} />
      <Route path="/dashboard" exact component={DashBoard} />
    </Router>
  );
}

export default App;
