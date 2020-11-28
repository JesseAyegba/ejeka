import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";

import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const token = useSelector((state) => state.auth.token);
  const progress = useSelector((state) => state.progress);
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="progress" style={{display: progress ? "block" : "none" }}><Loader /></div>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Home />}
          </Route>
          <Route path="/services" exact>
            {token ? <Redirect to="/dashboard" />  : <Services />}
          </Route>
          <Route path="/signup" exact>
            {token ? <Redirect to="/dashboard" /> : <Signup />}
          </Route>
          <Route path="/login" exact>
            {token ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route path="/dashboard" exact>
            {token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
