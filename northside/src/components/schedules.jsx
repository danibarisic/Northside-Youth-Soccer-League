import React, { } from 'react';
import "../index.css"
import { GameTable } from './gametable';
import { LocationTable } from './locationlist';

export const Schedules = () => {
    return (
        <>
            <div className="container-schedule">
                <div className="container-content py-3">
                    <h2>Game Schedules</h2>
                    <h3>Winter Season</h3>
                </div>
                <div>
                    <table className="table table-striped table-dark table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Team 1</th>
                                <th scope="col">Team 2</th>
                                <th scope="col">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <GameTable />
                        </tbody>
                    </table>
                    <h3>Game Locations</h3>
                    <table className="table table-striped table-dark table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Directions</th>
                                {/* <th scope="col">Map URL</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <LocationTable />
                        </tbody>
                    </table>

                </div>
                <div>

                </div>
            </div>
        </>
    )
};