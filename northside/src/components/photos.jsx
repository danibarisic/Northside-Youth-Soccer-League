import React, { useState, useEffect } from "react";
import "../index.css"
import { useObject } from "react-firebase-hooks/database";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ref, push } from "firebase/database";
import { database } from "../firebase.js";
import games from "../database.json";

export const PhotoInput = () => {
    const { gameId } = useParams();
    useEffect(() => {
    }, []);

    const gameList = Object.values(games.games);
    const game = gameList.find((g) => g.id === gameId);

    const handleSubmit = (e) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert("You must be signed in to submit a photo.");
            return;
        }
        e.preventDefault();
    };

    if (!gameId) return <p>Game not found...</p>;

    return (
        <>
            <div className="gallery-container">
                <label htmlFor="picture">Choose a photo to submit:</label>
                <input className="photoInput" type="file" id="picture" name="picture" accept="image/*" capture="environment" />
            </div>
        </>
    );
};