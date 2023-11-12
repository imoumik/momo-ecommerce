import styled from 'styled-components';

const StyledSignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 30em;
  margin: 2em;
  
  .ui.form .field>label {
    text-align: left !important;
  }

  h2 {
    margin: auto;
  }

  button{
    float: right;
  }
`;

export default StyledSignUpForm;