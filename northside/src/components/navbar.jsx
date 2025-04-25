import React from "react";
import { NavLink, useNavigate, useLocation, useMatch, useParams } from "react-router-dom";
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

export const BackToMatchButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const match = location.pathname.match(/\/(?:details|messaging|photos)\/(\d+)/);
    const gameId = match ? match[1] : null;

    const handleClick = () => {
        navigate(`/details/${gameId}`);
    }
    return (
        <div>
            <button className="back-button" onClick={handleClick}>Back to Match</button>
        </div>

    )
}

export const MessagesButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const match = location.pathname.match(/\/(?:details|messaging|photos)\/(\d+)/);
    const gameId = match ? match[1] : null;

    const handleClick = () => {
        navigate(`/messaging/${gameId}`);
    }
    return (
        <div>
            <button className="message-button" onClick={handleClick}>Messages</button>
        </div>

    )
};

export const PhotosButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const match = location.pathname.match(/\/(?:details|messaging|photos)\/(\d+)/);
    const gameId = match ? match[1] : null;

    const handleClick = () => {
        navigate(`/photos/${gameId}`);
    }
    return (
        <div>
            <button className="photo-button" onClick={handleClick}>Gallery</button>
        </div>

    )
};

export const Navbar = ({ gameId }) => {
    const [user] = useAuthState(auth);
    const isDetailsPage = useMatch("/details/:gameId");
    const isMessagesPage = useMatch("/messaging/:gameId");
    const isGalleryPage = useMatch("/photos/:gameId")

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
                    {/* <li>
                        {user && (isDetailsPage || isGalleryPage) ? <MessagesButton /> : ''}
                    </li>
                    <li>
                        {user && isMessagesPage ? <PhotosButton /> : ''}
                    </li> */}
                    <li>
                        {user ? <SignOutButton /> : <SignInButton />}
                    </li>
                </ul>
            </nav>
        </div>
    )
};