import React from "react";
import "../styles/TransferForm.css";

const TransferForm = () => {
  return (
    <div className="container">
      <h4 className="send-money-order-title">Send Money Order:</h4>
      Use template:
      <div class="form-group">
        <select class="form-control">
          <option>Mom</option>
          <option>Galvanize</option>
        </select>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Company Name / Recevers Name</label>
          <input
            type="text"
            class="form-control"
            id="receiver"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Full Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            aria-describedby="address"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            aria-describedby="description"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Amount</label>
          <input type="number" class="form-control" id="amount" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
