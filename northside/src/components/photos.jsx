import React, { useState, useEffect } from "react";
import "../index.css"
import { useParams } from "react-router-dom";
import { ref as dbRef, push, set, get } from "firebase/database";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { database, storage, auth } from "../firebase.js";
import { BackToMatchButton, MessagesButton } from "./navbar.jsx";
import { useAuthState } from "react-firebase-hooks/auth";

export const PhotoInput = () => {
    const [user] = useAuthState(auth);
    const { gameId } = useParams();
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (gameId) {
            const photoListRef = dbRef(database, `photos/${gameId}`);
            get(photoListRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const photosData = snapshot.val();
                        const photoUrls = Object.values(photosData).map((photo) => photo.url);
                        setPhotos(photoUrls);
                    } else {
                        console.log("No photos available yet.");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [gameId]);

    const onImageChange = (e) => {
        let file = e.target.files[0];

        if (file) {
            setImage(file);
        }
    };

    const uploadToFirebase = () => {
        if (image) {
            const imageRef = ref(storage, `images/${gameId}/${image.name}`);

            uploadBytes(imageRef, image)
                .then(() => {
                    return getDownloadURL(imageRef);
                })
                .then((downloadURL) => {
                    setUrl(downloadURL);
                    const photoListRef = dbRef(database, `photos/${gameId}`);
                    const newPhotoRef = push(photoListRef);

                    set(newPhotoRef, {
                        url: downloadURL,
                        uploadedAt: Date.now(),
                        uploader: user?.uid || "anonymous",
                        fileName: image.name,
                    });
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
        e.preventDefault();
        if (!user) {
            alert("You must be signed in to submit a photo.");
            return;
        }
        uploadToFirebase();
    };

    if (!gameId) return <p>Game not found...</p>;

    return (
        <>
            <div className="photo-div-background">
                <form className="photo-submit" onSubmit={handleSubmit}>
                    <div className="gallery-container">
                        <label htmlFor="picture">Choose a photo to submit:</label>
                        <input
                            onChange={onImageChange}
                            className="photoInput"
                            type="file"
                            id="picture"
                            name="picture"
                            accept="image/*"
                            capture="environment"
                        />
                    </div>
                    <button className="upload-button" type="submit">Upload Photo</button>
                </form>

                {loading && <p className="loading-text">Uploading image, please wait...</p>}

                {url && (
                    <img src={url} className="gallery-photo" alt="Gallery" />
                )}
                <div className="gallery">
                    {photos.length === 0 ? (
                        <p>No photos uploaded yet.</p>
                    ) : (
                        photos.map((url, index) => (
                            <img key={index} src={url} alt={"Uploaded photos"} className="gallery-photo" />
                        ))
                    )}
                </div>
                <div className="container-buttons">
                    {user ? (
                        <>
                            <MessagesButton />
                            <BackToMatchButton />
                        </>
                    ) : (
                        <BackToMatchButton />
                    )}
                </div>
            </div>
        </>
    );
};