import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"

export const Navbar = () => {
    return (
        <div className="container-navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="./" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./schedules" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Schedules
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./registration" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Registration Form
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};