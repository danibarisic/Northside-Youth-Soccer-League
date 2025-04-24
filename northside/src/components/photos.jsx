import React, { useState, useEffect } from "react";
import "../index.css"
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.js";

export const PhotoInput = () => {
    const { gameId } = useParams();

    useEffect(() => {
    }, []);

    const [image, setImage] = useState(null);

    const onImageChange = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.onload = () => {
                if (reader.readyState === 2) {
                    console.log(file);
                    setImage(file);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setImage(null);
        }
    };
    const uploadToFirebase = () => {
        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            uploadBytes(imageRef, image)
                .then(() => {
                    alert("Image succesfully loaded to Firebase.");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Upload failed.");
                });
        } else {
            alert("Please upload an image first.");
        }
    }
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
            <form onSubmit={handleSubmit}>
                <div className="gallery-container">
                    <label htmlFor="picture">Choose a photo to submit:</label>
                    <input onChange={(e) => { onImageChange(e); }} className="photoInput" type="file" id="picture" name="picture" accept="image/*" capture="environment" />
                </div>
                <button type="submit" onClick={uploadToFirebase}>Upload Photo</button>
            </form>
        </>
    );
};