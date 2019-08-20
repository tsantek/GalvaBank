import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header/Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header-color">
      <div className="container">
        <span className="navbar-brand" style={{ fontSize: "30px" }}>
          GalvaBank
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
                Home <span className="sr-only" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accounts">
                Accounts <span className="sr-only" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transfer">
                Transfer$$$ <span className="sr-only" />
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item">
              <span className="nav-link">Settings </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">LOG OUT </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
