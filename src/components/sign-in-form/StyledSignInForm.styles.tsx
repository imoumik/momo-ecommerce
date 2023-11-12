import styled from 'styled-components';

const StyledSignInForm = styled.div`
  // display: flex;
  flex-direction: column;
  width: 30em;
  margin: 2em;

  .ui.form .field>label {
    text-align: left !important;
  }

  h2 {
    margin: auto;
    text-align: center;
  }
  
  .buttons-container {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledSignInForm;