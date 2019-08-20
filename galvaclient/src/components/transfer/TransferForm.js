import React from "react";
import "../../styles/transfer/TransferForm.css";

const TransferForm = () => {
  return (
    <div className="container">
      <h4 className="send-money-order-title">Send Money Order:</h4>
      Use template:
      <div className="form-group">
        <select className="form-control">
          <option>Mom</option>
          <option>Galvanize</option>
        </select>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Company Name / Recevers Name
          </label>
          <input
            type="text"
            className="form-control"
            id="receiver"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Full Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            aria-describedby="address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            aria-describedby="description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Amount</label>
          <input type="number" className="form-control" id="amount" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
