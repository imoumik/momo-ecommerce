import { ChangeEvent } from 'react';
import { Form, Input, InputOnChangeData } from 'semantic-ui-react';
// import clsx from 'clsx';
import StyledInput from './StyledInput.styles';

const FormInput = ({ label, ...otherProps }: { label: string; type: string; required: true; onChange: (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void; name: string; value: string; }) => {
    return (
        <StyledInput>
            <Form.Field>
                {label &&
                    <label
                    /* className={clsx('form-input-label',
                         { 'shrink': (otherProps.value.length > 0) })} 
                         */
                    >{label}
                    </label>}
                <Input {...otherProps} /* className='form-input' */ />
            </Form.Field >
        </StyledInput>
    );
};

export default FormInput;