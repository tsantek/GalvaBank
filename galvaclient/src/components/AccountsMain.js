import React, { Component } from "react";
import ShowHistory from "./ShowHistory";

class AccounstMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balanceDetail: null
    };
  }

  render() {
    return (
      <div className="container">
        <h4 className="accounts-text">Accounts:</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="dash-card">
              <h5>Debit Card Balance</h5>
              <p>0.00 USD</p>
              <span>Available</span>
              <div
                className="full-history-button d-flex justify-content-center align-items-center"
                onClick={() => this.setState({ balanceDetail: 1 })}
              >
                Full History
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-card">
              <h5>Debit Card Balance</h5>
              <p>0.00 USD</p>
              <span>Available</span>
              <div
                className="full-history-button d-flex justify-content-center align-items-center"
                onClick={() => this.setState({ balanceDetail: 2 })}
              >
                Full History
              </div>
            </div>
          </div>
        </div>
        {this.state.balanceDetail === 1 ? (
          <ShowHistory balanceDetail={"Debit"} />
        ) : this.state.balanceDetail === 2 ? (
          <ShowHistory balanceDetail={"Credit"} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AccounstMain;
