import { ChangeEvent, FormEvent, useState } from 'react';
import { Form, FormProps, InputOnChangeData, Segment } from 'semantic-ui-react';
import { ISignUpFormFields } from '../../utils/InterfaceTypes';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { UserCredential } from 'firebase/auth';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import StyledSignUpForm from './StyledSignUpForm.styles';

const defaultFormFields: ISignUpFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>, data: FormProps) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password do not match. Please reconfirm password');
            return;
        }
        try {
            const response: UserCredential | undefined = await createAuthUserWithEmailAndPassword(email, password);
            if (response?.user) {
                //NOTE: Can't move this to UserContext since we need displayName
                await createUserDocumentFromAuth(response?.user, { displayName });
                alert('SignUp Success!')
                // setCurrentUser(response.user)
                resetFormFields();
            }
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <StyledSignUpForm>
            <h2>Don't Have an account?</h2>
            <Segment>
                <span>Sign Up with your Email and Password</span>
                <Form onSubmit={handleSubmit} >
                    <FormInput label='Display Name'
                        type='text'
                        required
                        onChange={handleChange}
                        name='displayName'
                        value={displayName}
                    />
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
                    <FormInput label='Confirm Password'
                        type='password'
                        required
                        onChange={handleChange}
                        name='confirmPassword'
                        value={confirmPassword}
                    />
                    <Button type='submit'>Sign Up</Button>
                </Form>
            </Segment>
        </StyledSignUpForm>
    );
}

export default SignUpForm;