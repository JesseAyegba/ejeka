import React, { useEffect, useState } from "react";
import "./SignupForm.css";

import { Link } from "react-router-dom";
import { signUp } from "../requests/signup";

function SignupForm() {
  const [formData, setformData] = useState({
    first_name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    first_nameError: "",
    emailError: "",
  });
  useEffect(() => {
    let first_name = document.querySelector("#first_name");
    first_name.focus();
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
    signUp(formData.first_name, formData.email, formData.password1, formData.password2);
    form.reset();
  };
  return (
    <div className="sign-up-form">
      <form id="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-field">
          <label htmlFor="first_name">First Name</label>
          <input
            onChange={(e) => handleChange(e)}
            id="first_name"
            type="text"
            required
            name="first_name"
          />
          <p style={{color: "red"}}>{errors.first_nameError}</p>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleChange(e)}
            id="email"
            type="email"
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
            name="password2"
          />
        </div>
        <button type="submit" className="sign-up-form__btn">
          Sign Up
        </button>
      </form>
      <div className="already">
        <p>
          Already have an account?
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
