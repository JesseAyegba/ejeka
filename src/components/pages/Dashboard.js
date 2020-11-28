import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import Navbar from "../Navbar";
import Dashbar from "../Dashbar";

import { useSelector } from "react-redux";

function Dashboard() {
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_USER_URL}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((errors) => console.log(errors));
  }, []);
  return (
    <div className="dashboard">
      <Dashbar />
      <div className="content">
        <h1>Hello, {user.first_name}</h1>
      </div>
    </div>
  );
}
export default Dashboard;
