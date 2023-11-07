import { Button } from "semantic-ui-react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <h1>I am the SignIn Page</h1>
            <Button onClick={logGoogleUser}>Signin with Google Popup</Button>
        </>
    );
}

export default SignIn;