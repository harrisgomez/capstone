import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8-34H0lhB2N0rBV-GBFs1YcsDZqdxSu8",
    authDomain: "capstone-db-e0f43.firebaseapp.com",
    projectId: "capstone-db-e0f43",
    storageBucket: "capstone-db-e0f43.appspot.com",
    messagingSenderId: "341363822874",
    appId: "1:341363822874:web:11c13fe1b80e54989c9ca3"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
};