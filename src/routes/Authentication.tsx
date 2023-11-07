import { Button, Divider, Grid, Segment } from 'semantic-ui-react';
import { auth, signInWithGoogleRedirect, signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

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
            <h1>I am the SignIn Page</h1>
            <Button onClick={logGoogleUser}>Signin with Google Popup</Button>
            <Button onClick={signInWithGoogleRedirect}>Signin with Google Redirect</Button>
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
        </>
    );
}

export default Authentication;