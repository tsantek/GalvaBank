import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexLogin from "./components/auth/IndexLogin";
import DashBoard from "./components/dashboard/DashBoard";
import Accounts from "./components/accounts/Accounts";
import Transfer from "./components/transfer/Transfer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexLogin} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/transfer" component={Transfer} />
      </Switch>
    </Router>
  );
}

export default App;
