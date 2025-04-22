import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJ-49HyPl9zNIvihI4gHI6IREYSj0QzVA",
    authDomain: "northside-youth-soccer-l-a199a.firebaseapp.com",
    databaseURL: "https://northside-youth-soccer-l-a199a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "northside-youth-soccer-l-a199a",
    storageBucket: "northside-youth-soccer-l-a199a.appspot.com",
    messagingSenderId: "286595080993",
    appId: "1:286595080993:web:f47d1ca6bb12855d68d460",
    measurementId: "G-KEX7X2JTNK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const database = getDatabase(app)
export const storage = getStorage();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return user;
    }
    catch (error) {
        console.error(error.mesage);
    }
}

export const signOut = async () => {
    try {
        await firebaseSignOut(auth);
    }
    catch (error) {
        console.error(error.message);
    }
}