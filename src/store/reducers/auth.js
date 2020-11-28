import { logout } from "../../requests/logout";

const initialState = {
  token: localStorage.getItem("token"),
  errorMessage: "",
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: localStorage.getItem("token"),
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        errorMessage: "Your email or password maybe incorrect",
      };
      case "LOGOUT":
          let token = localStorage.getItem("token");
          logout(token);
          localStorage.removeItem("token");
          return {
              ...state,
              token: localStorage.getItem("token"),
          }
          
    default:
      return state;
  }
};
