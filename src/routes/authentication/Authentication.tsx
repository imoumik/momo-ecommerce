import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGoogleRedirect, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button';
import './authentication.styles.scss';

const Authentication = () => {

    useEffect(() => {
        // Asynchronous anonymous function, since not recommended to make useEffect ReadOnly
        // Could not make anonymous due to typescript
        const redirectResponseFn = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                await createUserDocumentFromAuth(response.user);
            }
        }
        redirectResponseFn();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    /*     const logGoogleRedirectUser = async () => {
            const { user } = await signInWithGoogleRedirect();
        } */

    return (
        <>
            <div className="authentication-container">
                <SignInForm />
                <SignUpForm />
            </div>
            <div className='additional-auth'>
                <h2>Additional SignIn Authentications: </h2>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
                    Sign In With Google
                </Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={signInWithGoogleRedirect}>
                    Signin with Google Redirect
                </Button>
            </div>
        </>
    );
}

export default Authentication;