import { csrftoken } from "./csrf";
import { store } from "../store/store";
import { showProgress, hideProgress } from "../store/actions/progress";

export const signUp = (first_name, email, password1, password2) => {
  store.dispatch(showProgress());
  let data = {
    first_name: first_name,
    email: email,
    password: password1,
    re_password: password2,
  };
  fetch(`${process.env.REACT_APP_SIGNUP_URL}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      store.dispatch(hideProgress());
    })
    .catch((errors) => console.log(errors));
};
