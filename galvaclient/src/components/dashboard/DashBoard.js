import React, { Component } from "react";
import Header from "../header/Header";
import Main from "./Main";

class DashBoard extends Component {
  state = {};
  render() {
    return (
      <div style={{ background: "#f5f7fa", minHeight: "100vh" }}>
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default DashBoard;
