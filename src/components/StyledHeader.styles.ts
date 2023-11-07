import styled from "styled-components";

const StyledHeader = styled.div`
    margin: 1em;
    justify-content: space-between;
    & .image {    
        border: ${props => props.theme.iconBorder};
        vertical-align: middle;
    }
    & .link-container{
        //width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        //justify-content: space-around;
        //float: inline-end;
        & .nav-link {
            margin: 1em;
            // display: flex;
            // justify-content: flex-end;
            // align-items: center;
            font-family: 'Montserrat', sans-serif;
            &:hover {
                color: cornflowerblue;
            }
        }
    }

    .link-containerX {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    
        .nav-link {
          padding: 10px 15px;
          cursor: pointer;
        }
      }
`;

export default StyledHeader;