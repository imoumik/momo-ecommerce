import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, FormProps, Input, InputOnChangeData, Segment } from 'semantic-ui-react';
import { ISignInFormFields } from '../utils/InterfaceTypes';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../utils/firebase/firebase.utils';
import { UserCredential } from 'firebase/auth';
import StyledSignInForm from './styles/StyledSignInForm.styles';
import FormInput from './FormInput';

const defaultFormFields: ISignInFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        event.preventDefault();
        setFormFields({ ...formFields, [data.name]: data.value })
        console.log(formFields)
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        resetFormFields();
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>, data: FormProps) => {
        event.preventDefault();
        if (!email || !password) {
            alert('Please enter both email Id and password');
            return;
        }
        try {
            const response: UserCredential | undefined = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            if (response?.user) {
                alert('SignIn Success!')
                resetFormFields();
            }
        } catch (error: any) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                case 'auth/invalid-login-credentials':
                    alert('Incorrect password for email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return (
        <StyledSignInForm>
            <h2>Already registered?</h2>
            <Segment>
                <span>Sign In with your Email or Google</span>
                <Form onSubmit={handleSubmit} >
                    <FormInput label='Email'
                        type='email'
                        required
                        onChange={handleChange}
                        name='email'
                        value={email}
                    />
                    <FormInput label='Password'
                        type='password'
                        required
                        onChange={handleChange}
                        name='password'
                        value={password}
                    />
                    <div>
                        <Button secondary type='submit'>
                            Sign In
                        </Button>
                        <Button type='button' color='instagram' onClick={signInWithGoogle}>
                            Google Sign In
                        </Button>
                    </div>
                </Form>
            </Segment>
        </StyledSignInForm>
    );
}

export default SignInForm;