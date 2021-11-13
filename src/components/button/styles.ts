import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  max-width: 250px;
  height: 50px;
  border-radius: 5px;
  background-color: var(--orange200);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  :hover {
    filter: brightness(1.2);
  }
`;
