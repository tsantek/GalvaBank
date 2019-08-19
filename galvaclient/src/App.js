import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexLogin from "./components/IndexLogin";
import DashBoard from "./components/DashBoard";
import Accounts from "./components/Accounts";

function App() {
  return (
    <Router>
      <Route path="/" exact component={IndexLogin} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/accounts" component={Accounts} />
    </Router>
  );
}

export default App;
