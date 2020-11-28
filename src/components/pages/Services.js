import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom"
import Navbar from "../Navbar"

function Services() {
let dispatch = useDispatch();

return (
        <div className="services">
            <Navbar />
            <h1>Services</h1>
        </div>
    )
}
export default Services;
