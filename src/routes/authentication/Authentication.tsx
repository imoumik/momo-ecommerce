import { useEffect } from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
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
            console.log(response);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        redirectResponseFn();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    /*     const logGoogleRedirectUser = async () => {
            const { user } = await signInWithGoogleRedirect();
        } */

    return (
        <>
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <SignInForm />
                        </Grid.Column>
                        <Grid.Column>
                            <SignUpForm />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
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