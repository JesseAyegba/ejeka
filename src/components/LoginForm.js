import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { login } from "../requests/login";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    useEffect(() => {
        let emailField = document.querySelector("#login-form__email");
        emailField.focus();
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
        login(formData.email, formData.password);
        form.reset();
    }
    return(
        <div className="login-form">
            <form id="login-form" onSubmit={ (e) => handleSubmit(e) }>
                <div className="login-form__field">
                    <input name="email" onChange={ (e) => handleChange(e) } id="login-form__email" type="email" placeholder="Email" required/>
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