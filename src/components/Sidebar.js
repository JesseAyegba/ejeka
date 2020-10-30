import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin } from "react-icons/si";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../actions/sidebar";

function Sidebar() {
  let dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <div className="sidebar" id={sidebar ? "show-sidebar" : "hide-sidebar"}>
      <div>
        <ul className="sidebar__links">
          <li className="sidebar__link">
            <NavLink to="/" exact onClick={() => dispatch(hideSidebar())}>
              Home
            </NavLink>
          </li>
          <li className="sidebar__link" onClick={() => dispatch(hideSidebar())}>
            <NavLink to="/services" exact>
              Services
            </NavLink>
          </li>
          <li className="sidebar__link">
            <NavLink to="/signup" exact onClick={() => dispatch(hideSidebar())}>
              Sign up
            </NavLink>
          </li>
        </ul>
        <div className="sidebar__icons">
          <div className="sidebar__icon">
            <a href="" target="_blank">
              <SiFacebook />
            </a>
          </div>
          <div className="sidebar__icon">
            <a href="" target="_blank">
              <SiInstagram />
            </a>
          </div>
          <div className="sidebar__icon">
            <a href="" target="_blank">
              <SiTwitter />
            </a>
          </div>
          <div className="sidebar__icon">
            <a href="" target="_blank">
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div>
        <FaTimes
          className="sidebar__cross"
          onClick={() => dispatch(hideSidebar())}
        />
      </div>
    </div>
  );
}

export default Sidebar;
