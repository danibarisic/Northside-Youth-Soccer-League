import React, { } from 'react';
import "../index.css"
import { GameTable } from './gametable';

export const Schedules = () => {
    return (
        <>
            <div className="container-schedule">
                <div className="container-content">
                    <h2>Game Schedules</h2>
                    <h3>Winter Season</h3>
                </div>
                <div className="table-container">
                    <table className="table-schedule">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Team 1</th>
                                <th>Team 2</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <GameTable />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};