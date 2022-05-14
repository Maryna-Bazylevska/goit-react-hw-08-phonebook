import styled from '@emotion/styled';
export const Wrapper = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 450px;
  border-radius: 6px;
`;
export const Title = styled.h1`
  color: black;
`;
export const Text = styled.p`
  margin: 30px;
  color: black;
`;
export const Button = styled.button`
  padding: 5px;
  margin: 7px 0;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #c5637c;
  color: black;
  cursor: pointer;
  text-transform: capitalize;
  box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: pink;
    color: white;
  }
`;
