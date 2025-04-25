import React, { } from 'react';
import "../index.css"
import games from "../database.json";
import { useNavigate } from 'react-router-dom';

export const LocationTable = () => {
    const navigate = useNavigate();
    // const handleRowClick = (id) => {
    //     navigate(`/locations/${id}`);
    // };

    const arrayOfLocations = Object.values(games);
    const listLocations = arrayOfLocations[0];

    const listOfLocations = Object.values(listLocations).flatMap((location) => (
        <tr className="table-row" key={location.id}>
            <td>{location.name}</td>
            <td>{location.address}</td>
            <td>
                {location.mapURL ? (
                    <iframe title={location.name}
                        src={location.iframe}
                        width={80} height={80}
                    ></iframe>
                ) : (
                    <span>No Map Available</span>
                )}
            </td>
        </tr>
    ));
    return listOfLocations
};