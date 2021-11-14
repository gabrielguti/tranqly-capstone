import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  height: 200px;
  background: linear-gradient(90deg, rgba(69, 36, 122, 0.87) 0%, #9677d9 100%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input {
    width: 90%;
    height: 40px;
    max-width: 600px;
    min-width: 300px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
  }
  input {
    height: 40px;
    max-width: 600px;
    width: 100%;
    min-width: 250px;
  }
  svg {
    margin-right: 10px;
    font-size: 24px;
  }
  p {
    display: none;
    @media (min-width: 767px) {
      display: block;
      font-size: 25px;
      font-weight: lighter;
      color: var(--gray200);
      margin-bottom: 10px;
    }
  }
`;

export const ContainerProfessionals = styled.div`
  padding: 30px 0;
`;
