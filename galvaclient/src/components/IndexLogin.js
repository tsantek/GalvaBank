import React from "react";
import "../styles/IndexLogin.css";

const IndexLogin = () => {
  return (
    <div className="wrapperLogin">
      {/* NAVBAR */}
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.3/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          GalvaBank
        </a>
      </nav>
      {/* FORM */}
      <div class="text-center">
        <form class="form-signin">
          <img
            class="mb-4"
            src="/docs/4.3/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />

          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy;2019</p>
        </form>
      </div>
    </div>
  );
};

export default IndexLogin;
