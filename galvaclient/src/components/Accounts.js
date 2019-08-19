import React from "react";
import Header from "./Header";
import AccounstMain from "./AccountsMain";
import "../styles/AccountMain.css";

const Accounts = () => {
  return (
    <div className="main-container">
      <Header />
      <AccounstMain />
    </div>
  );
};

export default Accounts;
