// Import the functions you need from the SDKs you need
import { AnyARecord } from 'dns';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, UserCredential, User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBCGRJZQRvWauXPq9QlBbkJbS7S8Mttrl8',
    authDomain: 'momo-ecommerce-db.firebaseapp.com',
    projectId: 'momo-ecommerce-db',
    storageBucket: 'momo-ecommerce-db.appspot.com',
    messagingSenderId: '1084676384395',
    appId: '1:1084676384395:web:a9918aa9209dc40180168e'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
    const userDocRef = doc(db, 'users', userAuth?.uid); // 'UZkkPqqiXFdnYhil7zBUJAA8DT12'
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error: any) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};
