import React, { } from 'react';
import "../index.css"
import { useParams } from 'react-router-dom';
import games from "../database.json";
import { MessagesButton, PhotosButton } from './navbar';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export const GameDetails = () => {
    const [user] = useAuthState(auth);
    const { gameId } = useParams();
    const gameList = Object.values(games.games);
    const game = gameList.find((g) => String(g.id) === gameId);

    if (!game) return <p>Game not found...</p>

    const locations = games.locations;
    const matchedLocation = locations[game?.location];

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

            <div className="d-flex justify-content-center align-items-center m-0 p-0">
                {matchedLocation?.iframe && (
                    <iframe className="iframeMap mt-0" title="Location map"
                        src={matchedLocation.iframe}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                )}
            </div>
            <div className="container-buttons">
                {user ? (
                    <>
                        <MessagesButton />, <PhotosButton />
                    </>
                ) : ""}
            </div>
        </>
    )
}