import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 50px;
  width: auto;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
