import React from "react";
import "./Navbar.css";
import { NavLink, Link} from "react-router-dom";
import { SiBreaker } from "react-icons/si";
import { MdMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showSidebar } from "../actions/sidebar";

function Navbar() {
  let dispatch = useDispatch()
  
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <SiBreaker className="navbar__icon" />
          <div className="div">
            <NavLink to="/" exact>
              <h1>EJEKA</h1>
            </NavLink>
          </div>
        </div>
        <ul className="navbar__links">
          <li className="navbar__link navbar__link--noborder">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="navbar__link navbar__link--noborder">
            <NavLink to="/services" exact>
              Services
            </NavLink>
          </li>
          <li className="navbar__link navbar__link--border">
            <NavLink to="/signup" exact>
              Sign up
            </NavLink>
          </li>
        </ul>
          <MdMenu className="navbar__menu" onClick={ () => dispatch(showSidebar()) }/>
      </div>
    </div>
  );
}
export default Navbar;
