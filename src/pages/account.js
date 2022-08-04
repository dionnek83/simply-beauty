import React from "react";
import { Link } from "react-router-dom";
import "../pages/account.css";

const Account = () => {
  return (
    <>
      <section className="account">
        <h1>Sign In</h1>
        <form>
          <label>Email Address</label>
          <input type="email"></input>

          <label>Password</label>
          <input type="password"></input>
          <Link to="" className="acc-link">
            Forgot your password
          </Link>
        </form>
        <button>Sign In</button>
        <p>
          Don't have an account? <Link className="acc-link">Sign up</Link>
        </p>
      </section>
    </>
  );
};

export default Account;
