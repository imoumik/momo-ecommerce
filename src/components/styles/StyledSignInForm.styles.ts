import styled from 'styled-components';

const StyledSignUpForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;

    .ui.form .field>label {
      text-align: left !important;
    }
  
    h2 {
      margin: auto;
    }
    
    button{
      display: inline-block !important;
      margin: 1em !important;
    }
  `;

  export default StyledSignUpForm;