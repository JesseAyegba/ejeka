import React, { useEffect } from "react";
import "./LoginForm.css";

function LoginForm() {
    useEffect(() => {
        let usernameField = document.querySelector("#login-form__username");
        usernameField.focus();
    }, [])
    let handleSubmit = (e) => {
        let form = document.querySelector("#login-form");
        e.preventDefault();
        form.reset();
    }
    return(
        <div className="login-form">
            <form id="login-form" onSubmit={ (e) => handleSubmit(e) }>
                <div className="login-form__field">
                    <input id="login-form__username" type="text" placeholder="Email" required/>
                </div>
                <div className="login-form__field">
                    <input type="password" placeholder="Password" required/>
                </div>
                <button type="submit" className="login-form__btn">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;