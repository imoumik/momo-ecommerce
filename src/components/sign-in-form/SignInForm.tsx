import { ChangeEvent, FormEvent, useState } from 'react';
import { Form, FormProps, InputOnChangeData, Segment } from 'semantic-ui-react';
import { ISignInFormFields } from '../../utils/InterfaceTypes';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { UserCredential } from 'firebase/auth';
import FormInput from '../form-input/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import StyledSignInForm from './StyledSignInForm.styles';

const defaultFormFields: ISignInFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const value = useContext<CurrentUserContextType | null>(UserContext);
    // const { setCurrentUser } = value as CurrentUserContextType;

    const handleChange = (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        event.preventDefault();
        setFormFields({ ...formFields, [data.name]: data.value })
        console.log(formFields)
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // Move this functionality to Navigator
        // const { user } = await signInWithGooglePopup();
        // await createUserDocumentFromAuth(user);
        // resetFormFields();
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
                // setCurrentUser(response.user)
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
                    <div className='buttons-container'>
                        <Button type='submit'>Sign In</Button>
                        <Button
                            buttonType={BUTTON_TYPE_CLASSES.google}
                            type='button'
                            onClick={signInWithGoogle}
                        >
                            Sign In With Google
                        </Button>
                    </div>
                </Form>
            </Segment>
        </StyledSignInForm>
    );
}

export default SignInForm;