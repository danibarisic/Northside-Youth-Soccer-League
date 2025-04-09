import React from "react";


export const Banner = () => {
    return (
        <h1>NorthSide Youth Soccer League</h1>
    )
};

export const ButtonCount = ({ initialCount }) => {
    const [count, setCount] = React.useState(initialCount);
    return (
        <>
            <div>
                <button onclick={() => setCount(count + 1)}>+</button>
                <button onclick={() => setCount(count - 1)}>-</button>
            </div>
            <div>
                {count}
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
            <div className="announcement">
                <h3 className="header">August 4</h3>
                <p>NYSL Fundraiser</p>
            </div>
            <div className="announcement">
                <h3 className="header">August 16</h3>
                <p>Season Kick-off: Meet the teams</p>
            </div>
            <div className="announcement">
                <h3 className="header">September 1</h3>
                <p>First Game of the Season (Check Game Schedules for details)</p>
            </div>
        </div>
    )
};
