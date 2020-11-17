import { csrftoken } from "./csrf";

export const login = (username, password) => {
  let data = {
    username: username,
    password: password,
  };
  fetch("/auth/token/login/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.auth_token) {
          console.log("Your login was successful");
      } else {
          console.log("Get lost you animal")
      }
    })
    .catch((errors) => console.log(errors));
};
