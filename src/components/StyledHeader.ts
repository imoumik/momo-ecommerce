import styled from "styled-components";

const StyledButton = styled.header`
    margin: 1em;
    & .image {    
        border: ${props => props.theme.iconBorder};
        vertical-align: middle;
    }
`;

export default StyledButton;