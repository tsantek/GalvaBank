import React from "react";
import Header from "../header/Header";
import "../../styles/accounts/AccountMain.css";
import AccountsMain from "./AccountsMain";

const Accounts = () => {
  return (
    <div className="main-container">
      <Header />
      <AccountsMain />
    </div>
  );
};

export default Accounts;
