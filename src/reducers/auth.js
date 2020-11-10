const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated"),
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user"),
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", action.payload) 
      return {
        ...state,
        isAuthenticated: localStorage.getItem("isAuthenticated"),
        user: localStorage.getItem("user")
      };
    case "LOGIN_FAIL":
      localStorage.setItem("isAuthenticated", "false");
      return {
        ...state,
        isAuthenticated: localStorage.getItem("isAuthenticated"),
      };
      case "LOGOUT":
          localStorage.removeItem("isAuthenticated");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          return {
              ...state
          }
          
    default:
      return state;
  }
};
