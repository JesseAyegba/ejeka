import React from 'react';
import "./Signup.css";
import "../SignupForm";
import SignupForm from '../SignupForm';

function Signup() {
    return (
        <div className="signup"> 
        <div className="signup__text"></div>
        <div className="signup__form"><SignupForm /></div>
        </div>
    )
}
export default Signup;
