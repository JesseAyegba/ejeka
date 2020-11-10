import React, { useEffect } from "react";
import "./SignupForm.css";

import { Link } from "react-router-dom";

function SignupForm() {
  useEffect(() => {
    let username = document.querySelector("#username");
    username.focus();
  });
  
  let handleSubmit = (e) => {
      let form = document.querySelector("#form");
      e.preventDefault();
      form.reset();
  }
  return (
    <div className="sign-up-form">
      <form id="form" onSubmit={ (e) => handleSubmit(e) }>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="password1">Password</label>
          <input id="password1" type="password" required />
        </div>
        <div className="form-field">
          <label htmlFor="password2">Confirm Password</label>
          <input id="password2" type="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="already">
        <p>Already have an account? <span><Link to="/login" exact>Login</Link></span></p>
      </div>
    </div>
  );
}
export default SignupForm;
