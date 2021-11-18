import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 0 10px;
  height: 50px;
  border-radius: 5px;
  background-color: var(--orange200);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    background-color: var(--orange100);
  }
`;
