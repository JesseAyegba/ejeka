import React from "react";
import "./Login.css";
import LoginForm from "../LoginForm";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="login">
            <h1>Login</h1>
            <LoginForm />
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <p>Can't remember password? <Link to="/signup">Reset</Link></p>
        </div>
    )
}

export default Login;