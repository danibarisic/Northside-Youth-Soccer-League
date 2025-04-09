import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="container-navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="./">Home</Link>
                    </li>
                    <li>
                        <Link to="./schedules">Schedules</Link>
                    </li>
                    <li>
                        <Link to="./registration">Registration Form</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};