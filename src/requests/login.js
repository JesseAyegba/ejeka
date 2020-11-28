import { csrftoken } from "./csrf";
import { store } from "../store/store";
import { showProgress, hideProgress } from "../store/actions/progress";
import { loginSuccess, loginFail } from "../store/actions/auth";

export const login = (email, password) => {
  store.dispatch(showProgress());
  let data = {
    email: email,
    password: password,
  };
  fetch(`${ process.env.REACT_APP_LOGIN_URL }`, {
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
          store.dispatch(loginSuccess(data.auth_token));
          store.dispatch(hideProgress());
      } else {
          store.dispatch(loginFail());
          store.dispatch(hideProgress());
      }
    })
    .catch((errors) => console.log(errors));
};

