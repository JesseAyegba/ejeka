import { combineReducers } from "redux";
import { sidebar } from "./sidebar";
import { auth } from "./auth";
import { progress } from "./progress";

export const rootReducer = combineReducers({
    sidebar: sidebar,
    auth: auth,
    progress: progress,
})