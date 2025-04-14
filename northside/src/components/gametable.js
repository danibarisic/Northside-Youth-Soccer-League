import React, { } from 'react';
import "../index.css"
import games from "../database.json";

export const GameTable = () => {
    const gameData = games;
    const arrayOfGames = Object.values(gameData);
    const listGames = arrayOfGames[1];

    const listOfGames = Object.values(listGames).map((game) => (
        <tr key={game.id}>
            <td>{game.date}</td>
            <td>{game.time}</td>
            <td>{game.team1}</td>
            <td>{game.team2}</td>
            <td>{game.location}</td>
        </tr>
    ));
    return listOfGames;
};
