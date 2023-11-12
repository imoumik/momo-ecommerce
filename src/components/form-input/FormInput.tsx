import { ChangeEventHandler } from 'react';
import { FormInputLabel, Input, Group } from './StyledInput.styles';

interface IFormInputType {
    label: string;
    value?: string | undefined;
    required?: boolean;
    type?: 'text' | 'email' | 'password';
    name?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    otherProps?: any
}

const FormInput = ({ label, name, required = false, ...otherProps }: IFormInputType) => {
    return (
        <Group>
            <Input required={required} name={name} {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps?.value?.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
