import React from "react";
import "./Login.css";
import LoginForm from "../LoginForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
    const errorMessage = useSelector((state) => state.auth.errorMessage)
    return(
        <div className="login">
            <h1>Login</h1>
            { errorMessage ? <p className="error">{ errorMessage }</p> : null }
            <LoginForm />
            <p>Don't have an account?<Link to="/signup">SignUp</Link></p>
            <p>Can't remember password?<Link to="/signup">Reset</Link></p>
        </div>
    )
}

export default Login; 