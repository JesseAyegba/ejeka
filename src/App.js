import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/services" exact>
                <Services />
            </Route>
            <Route path="/signup" exact>
                <Signup />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
