import React from "react";
import "../index.css"

export const Home = () => {
    return (
        <>
            <div className="home-page">
                <Announcements />
            </div>
        </>
    )
};

export const Announcements = () => {
    return (
        <div className="container-announcement">
            <div className="title-announcement">
                <h2 className="header">Upcoming Events</h2>
            </div>
            <br />
            <div className="announcement bg-black">
                <h3 className="header text-white">August 4</h3>
                <p className="text-white">NYSL Fundraiser</p>
            </div>
            <div className="announcement bg-black">
                <h3 className="header text-white">August 16</h3>
                <p className="text-white">Season Kick-off: Meet the teams</p>
            </div>
            <div className="announcement bg-black">
                <h3 className="header text-white">September 1</h3>
                <p className="text-white">First Game of the Season (Check Game Schedules for details)</p>
            </div>
        </div>
    )
};
