import React, { useState, useEffect } from 'react';
import "../index.css"
import { useNavigate } from 'react-router-dom';
import games from "../database.json";

export const GameDetails = () => {
    const navigate = useNavigate();
    const gameData = games;
    const listOfGames = gameData[1];
    console.log(listOfGames);

    return (
        listOfGames
    )
}