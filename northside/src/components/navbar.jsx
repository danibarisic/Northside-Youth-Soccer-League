import React from "react";
import { NavLink, useNavigate, useMatch } from "react-router-dom";
import "../index.css"
import { signInWithGoogle, signOut, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const SignInButton = () => {
    return (
        <button className="button" onClick={signInWithGoogle}>
            Sign-In
        </button>
    )
}
export const SignOutButton = () => {
    return (
        <button className="button" onClick={signOut}>
            Sign-Out
        </button>
    )
}

export const MessagesButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('./messaging');
    }
    return (
        <button onClick={handleClick}>Messages</button>
    )
};

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const isDetailsPage = useMatch("/details/:gameId");

    return (
        <div className="container-navbar">
            <nav className="navbar">
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
                        {user && isDetailsPage ? <MessagesButton /> : ''}
                    </li>
                    <li>
                        {user ? <SignOutButton /> : <SignInButton />}
                    </li>
                    {/* <li>
                        <NavLink to="./registration" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Registration Form
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
};