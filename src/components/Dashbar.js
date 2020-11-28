import React from "react";
import "./Dashbar.css";

import { logout } from "../store/actions/auth";
import { useDispatch } from "react-redux";

import { GoDashboard } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiPower } from "react-icons/fi";

function Dashbar({ icon, text }) {
  const dispatch = useDispatch();
  return (
    <div className="dashbar">
      <ul className="dashbar__links">
        <li className="dashbar__link">
          <GoDashboard />
          <div className="dashbar__text">Overview</div>
        </li>
        <li className="dashbar__link">
          <FaWallet />
          <div className="dashbar__text">Savings</div>
        </li>
        <li className="dashbar__link">
          <VscAccount />
          <div className="dashbar__text">Account</div>
        </li>
        <li onClick={() => dispatch(logout())} className="dashbar__link dashbar__link--low">
          <FiPower />
          <div className="dashbar__text">Logout</div>
        </li>
      </ul>
    </div>
  );
}
export default Dashbar;
