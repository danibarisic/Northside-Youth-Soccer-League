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
            <div className="background-container-details">
                <div className="container-details">
                    <h2 className="fs-1">Match Details</h2>
                    <h2>{game.team1} vs {game.team2}</h2>
                    <h3>{game.date}</h3>
                    <h3>{game.time}</h3>
                </div>
            </div>


            <div className="details-title">
                <h1 className="my-3 d-flex justify-content-center align-items-center">{game.location}</h1>
            </div>

            <div className="my-5 d-flex justify-content-center align-items-center mt-0">
                {matchedLocation?.iframe && (
                    <iframe className="iframeMap mt-0" title="Location map"
                        src={matchedLocation.iframe}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                )}
            </div>
        </>
    )
}