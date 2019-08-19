import React from "react";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4 className="hello-msg">Good Morning ?Name?</h4>
          {/* Balance */}
          <div className="dash-card">
            <h5>Debit Card Balance</h5>
            <p>0.00 USD</p>
            <span>Available</span>
          </div>
          <div className="dash-card">
            <h5>Credit Card Balance</h5>
            <p>0.00 USD</p>
            <span>Available</span>
          </div>
          {/* Quick Transfer */}
          <div className="dash-card">
            <h5>Quick Transfer</h5>
            <div class="form-group">
              <label htmlFor="receiverName">Receivers Name :</label>
              <select type="text" class="form-control" id="receiverName">
                <option>Select Recever</option>
                <option>Mom</option>
                <option>2</option>
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="amount">Amount:</label>
              <input type="number" class="form-control" id="amount" />
            </div>
            <input type="button" className="btn btn-success" value="SEND" />
            <form />
          </div>
        </div>

        <div className="col-md-8">
          <div className="recent-activity">
            <div className="dash-card">
              <h5>Recent Completed activity</h5>
              <div className="recent-activiy">
                <div className="row">
                  <div className="col-md-2">
                    <b>Time:</b>
                  </div>
                  <div className="col-md-4">
                    <b>Name:</b>
                  </div>
                  <div className="col-md-4">
                    <b>Notes:</b>
                  </div>
                  <div className="col-md-2">
                    <b>Amount:</b>
                  </div>
                </div>
                {/* loop over recent activities */}
                <div
                  className="row row-activities withdraw"
                  style={{ color: "red" }}
                >
                  <div className="col-md-2">Oct 12</div>
                  <div className="col-md-4">Steakhouse</div>
                  <div className="col-md-4">Steakhouse</div>
                  <div className="col-md-2">-100$</div>
                </div>

                {/* new amount */}
                <div className="row row-activities deposit">
                  <div className="col-md-2">Oct 11</div>
                  <div className="col-md-4">Mom</div>
                  <div className="col-md-4">For Spending</div>
                  <div className="col-md-2">1000$</div>
                </div>
              </div>
              <p className="text-center" style={{ paddingTop: "40px" }}>
                Show all...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
