import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app); 