import React from "react";

const ShowHistory = props => {
  return (
    <div className="contaienr-history">
      <div className="dash-card">
        {props.balanceDetail} card history:
        <div className="row main-row">
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
        <div className="row row-activities withdraw" style={{ color: "red" }}>
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
    </div>
  );
};
export default ShowHistory;
