import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom"

function Services() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
return (
        <div className="services">
            <h1>Services</h1>
        </div>
    )
}
export default Services;
