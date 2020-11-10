import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom"

function Services() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
return (
        <div className="services">
            { isAuthenticated ? <h1>Dashboard</h1> : <Redirect to="/" /> }
        </div>
    )
}
export default Services;
