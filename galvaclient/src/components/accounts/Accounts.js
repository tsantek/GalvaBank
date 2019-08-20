import React from "react";
import Header from "../header/Header";
import AccountsMain from "./AccountsMain";

import "../../styles/accounts/AccountMain.css";

const Accounts = () => {
  return (
    <div className="main-container">
      <Header />
      <AccountsMain />
    </div>
  );
};

export default Accounts;
