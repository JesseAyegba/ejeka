import React from "react";
import "./Signup.css";
import "../SignupForm";
import SignupForm from "../SignupForm";
import connect from "../../svgs/connect.svg";
import Navbar from "../Navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="signup__text">
          <h1>Never miss a thing</h1>
          <h1>Sign Up Today</h1>
          <img className="signup__image" src={connect} alt="" />
        </div>
        <div className="signup__form">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
export default Signup;
