import styled from 'styled-components';

const StyledHeader = styled.div`
    margin: 1em;
    justify-content: space-between;
    & .image {    
        border: ${props => props.theme.iconBorder};
        vertical-align: middle;
    }
    & .link-container{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        & .nav-link {
            margin: 1em;
            font-family: 'Montserrat', sans-serif;
            &:hover {
                color: cornflowerblue;
            }
        }
    }
`;

export default StyledHeader;