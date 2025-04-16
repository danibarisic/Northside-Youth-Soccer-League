import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJ-49HyPl9zNIvihI4gHI6IREYSj0QzVA",
    authDomain: "northside-youth-soccer-l-a199a.firebaseapp.com",
    databaseURL: "https://northside-youth-soccer-l-a199a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "northside-youth-soccer-l-a199a",
    storageBucket: "northside-youth-soccer-l-a199a.firebasestorage.app",
    messagingSenderId: "286595080993",
    appId: "1:286595080993:web:f47d1ca6bb12855d68d460",
    measurementId: "G-KEX7X2JTNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export const signInWithGoogle = () => {

}