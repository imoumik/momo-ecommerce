export interface ICategory {
    id: number;
    title: string;
    imageUrl: string;
}
export interface ISignInFormFields {
    email: string;
    password: string;
}

export interface ISignUpFormFields extends ISignInFormFields {
    displayName: string;
    confirmPassword: string;
}


