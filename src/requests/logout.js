import { csrftoken } from "./csrf";

export const logout = (token) => {
    fetch(`${process.env.REACT_APP_LOGOUT_URL}`, {
        method: "POST",
        headers: {
            "X-CSRFToken": csrftoken,
            "Authorization": `Token ${token}`,
        },
    })
     .then((res) => res.json())
     .then((data) => console.log(data))
     .catch((errors) => console.log(errors))
} 