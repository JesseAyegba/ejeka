import React, { useEffect, useState } from "react";
import "./SignupForm.css";

import { Link } from "react-router-dom";
import { signUp } from "../requests/signup";

function SignupForm() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
  });
  useEffect(() => {
    let username = document.querySelector("#username");
    username.focus();
  }, []);
  let validate = () => {
    
  }
  let handleChange = (e) => {
    let value = e.target.value;
    setformData({
      ...formData,
      [e.target.name]: value,
    });
  };

  let handleSubmit = (e) => {
    let form = document.querySelector("#sign-up-form");
    e.preventDefault();
    signUp(formData.username, formData.email, formData.password1, formData.password2);
    form.reset();
  };
  return (
    <div className="sign-up-form">
      <form id="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => handleChange(e)}
            id="username"
            type="text"
            required
            placeholder="Neon"
            name="username"
          />
          <p style={{color: "red"}}>{errors.usernameError}</p>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleChange(e)}
            id="email"
            type="text"
            required
            placeholder="example@gmail.com"
            name="email"
          />
        </div>
        <p style={{color: "red"}}>{errors.emailError}</p>
        <div className="form-field">
          <label htmlFor="password1">Password</label>
          <input
            onChange={(e) => handleChange(e)}
            id="password1"
            type="password"
            required
            placeholder="**********"
            name="password1"
          />
        </div>
        <div className="form-field">
          <label htmlFor="password2">Confirm Password</label>
          <input
            onChange={(e) => handleChange(e)}
            id="password2"
            type="password"
            required
            placeholder="**********"
            name="password2"
          />
        </div>
        <button type="submit" className="sign-up-form__btn">
          Sign Up
        </button>
      </form>
      <div className="already">
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login" exact>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
export default SignupForm;
