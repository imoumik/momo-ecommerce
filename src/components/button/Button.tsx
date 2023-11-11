import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

interface IButtonType {
    children: string;
    buttonType?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    otherProps?: any
}

const Button = ({ children, buttonType, ...otherProps }: IButtonType) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
