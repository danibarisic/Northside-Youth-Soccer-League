import React, { } from 'react';
import "../index.css"
import { useParams } from 'react-router-dom';
import games from "../database.json";

export const GameDetails = () => {
    const { id } = useParams();
    const arrayOfGames = Object.values(games);
    const listOfGames = arrayOfGames[1];
    const gameList = Object.values(listOfGames);
    const game = gameList.find((g) => String(g.id) === id);

    const locations = arrayOfGames[0];
    const matchedLocation = locations[game.location];

    if (!game) return <p>Game not found...</p>

    return (
        <>
            <div className="container-details">
                <h2>Match Details</h2>
                <h2>{game.team1} vs {game.team2}</h2>
                <h3>{game.date}</h3>
                <h3>{game.time}</h3>
                <h3>{game.location}</h3>
            </div>
            <div className="map-details">
                {matchedLocation?.iframe && (
                    <iframe title={locations.name}
                        src={matchedLocation.iframe}
                    />
                )}
            </div>
        </>
    )
}