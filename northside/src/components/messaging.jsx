import React, { useState } from "react";

export const MessageInput = ({ headerRef }) => {
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);
        setMessage('');
    };

    return (
        <>
            <div ref={headerRef}>
                {/* This could be any content or component you want to manipulate */}
                <h1>Message Input</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ position: 'relative' }}>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
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
        </>
    );
};