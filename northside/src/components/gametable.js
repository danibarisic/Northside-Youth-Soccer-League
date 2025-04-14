import React, { } from 'react';
import "../index.css"
import games from "../database.json";
import { useNavigate } from 'react-router-dom';

export const GameTable = () => {
    const navigate = useNavigate();
    const handleRowClick = (id) => {
        navigate(`/details/${id}`);
    };

    const gameData = games;
    const arrayOfGames = Object.values(gameData);
    const listGames = arrayOfGames[1];

    const listOfGames = Object.values(listGames).map((game) => (
        <tr className="table-row" key={game.id} onClick={() => handleRowClick(game.id)} style={{ cursor: 'pointer' }}>
            <td>{game.date}</td>
            <td>{game.time}</td>
            <td>{game.team1}</td>
            <td>{game.team2}</td>
            <td>{game.location}</td>
        </tr>
    ));
    return listOfGames;
};
