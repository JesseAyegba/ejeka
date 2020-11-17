import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { login } from "../requests/login";

function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    useEffect(() => {
        let usernameField = document.querySelector("#login-form__username");
        usernameField.focus();
    }, [])
    let handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    let handleSubmit = (e) => {
        let form = document.querySelector("#login-form");
        e.preventDefault();
        login(formData.username, formData.password);
        form.reset();
    }
    return(
        <div className="login-form">
            <form id="login-form" onSubmit={ (e) => handleSubmit(e) }>
                <div className="login-form__field">
                    <input name="username" onChange={ (e) => handleChange(e) } id="login-form__username" type="text" placeholder="Email" required/>
                </div>
                <div className="login-form__field">
                    <input name="password" onChange={ (e) => handleChange(e) } type="password" placeholder="Password" required/>
                </div>
                <button type="submit" className="login-form__btn">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;