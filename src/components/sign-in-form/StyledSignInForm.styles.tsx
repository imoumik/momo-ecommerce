import styled from 'styled-components';

const StyledSignInForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 30em;

    .ui.form .field>label {
      text-align: left !important;
    }
  
    h2 {
      margin: auto;
    }
    
    .buttons-container {
      display: flex;
      justify-content: space-between;
    }
  `;

export default StyledSignInForm;