import { csrftoken } from "./csrf";

export const signUp = (username, email, password1, password2) => {
    let data = {
        username: username,
        email: email,
        password: password1,
        re_password: password2
    }
    fetch("/auth/users/", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(data)
    })
     .then((res) => res.json())
     .then((data) => console.log(data))
     .catch((errors) => console.log(errors))
}   