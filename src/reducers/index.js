import { combineReducers } from "redux";
import { sidebar } from "./sidebar";
import { auth } from "./auth";

export const rootReducer = combineReducers({
    sidebar: sidebar,
    auth: auth,
})