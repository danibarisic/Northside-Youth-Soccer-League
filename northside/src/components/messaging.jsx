import React, { useState, useEffect } from "react";
import "../index.css"
import { useList } from "react-firebase-hooks/database";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ref, push } from "firebase/database";
import { database, auth } from "../firebase.js";
import games from "../database.json";
import { BackToMatchButton, PhotosButton } from "./navbar.jsx";
import { useAuthState } from "react-firebase-hooks/auth";

export const MessageInput = () => {
    const [user] = useAuthState(auth);
    const { gameId } = useParams();
    useEffect(() => {
    }, []);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const gameList = Object.values(games.games);
    const game = gameList.find((g) => g.id === gameId);

    const gameMessagesRef = ref(database, `messages/${gameId}`);
    const [snapshots] = useList(gameMessagesRef);

    const handleSubmit = (e) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert("You must be signed in to post a message.");
            return;
        }

        e.preventDefault();
        const newMessage = {
            id: Date.now(),
            text: message,
            timestamp: new Date().toLocaleString(),
            user: {
                name: user.displayName,
                email: user.email,
                uid: user.uid,
            }
        };

        push(gameMessagesRef, newMessage);

        setMessages(prev => [...prev, newMessage]);
        setMessage('');

    };

    if (!gameList) return <p>Game not found...</p>;

    return (
        <>
            <div>
                <h1>{game.team1} vs {game.team2}</h1>
                <h3>{game.date}</h3>
                <h3>{game.time}</h3>
            </div>
            <ul style={{ listStyleType: 'none' }}>
                {snapshots?.map((msgSnap) => {
                    const msg = msgSnap.val();
                    return (
                        <li key={msgSnap.key}>
                            <strong>{msg.user?.name || "anonymous"}</strong> on {msg.timestamp}
                            <br />
                            {msg.text}
                        </li>
                    );
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <div style={{ position: 'relative' }}>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter message..."
                        rows={4}
                        style={{ width: '100%', paddingRight: '60px' }}
                    />
                    <button
                        type="submit"
                        style={{
                            position: 'absolute',
                            right: '10px',
                            bottom: '10px',
                        }}
                    >
                        Send
                    </button>
                </div>
            </form>

            <div className="container-buttons">
                {user ? (
                    <>
                        <PhotosButton />
                        <BackToMatchButton />
                    </>
                ) : (
                    <BackToMatchButton />
                )}
            </div>
        </>
    );
};