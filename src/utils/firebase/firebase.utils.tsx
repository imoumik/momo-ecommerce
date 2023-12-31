import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object: any) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    })

    await batch.commit();
    console.log('batch done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q); // snapshot are the actual data themselves
    // querySnapshot.docs = Array of all the individual documents
    /* const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        //@ts-ignore
        const { title, items }: { title: string, items: Record<string, any> } = docSnapshot.data();
        //@ts-ignore
        acc[title.toLowerCase()] = items;
        return acc
    }, []) */
    const categoryArray = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());//returns categories array
    return categoryArray;
}

export const createUserDocumentFromAuth = async (userAuth: User,
    additionalInformation = {}) => {
    if (!userAuth) return;
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
                ...additionalInformation
            });
        } catch (error: any) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)
