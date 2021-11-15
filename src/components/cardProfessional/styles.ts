import styled from "styled-components";

export const ProfessionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 20px auto;
  width: 90%;
  max-width: 1280px;
  box-shadow: 0px 0px 15px 6px rgb(0 0 0 / 30%);
  padding: 10px;
  @media (min-width: 900px) {
    flex-direction: row;
    min-height: 350px;
  }
`;

export const Card = styled.div`
  margin: auto;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 250px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    @media (min-width: 900px) {
      width: 20%;
    }
  }
  .infos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    h1 {
      font-size: 18px;
    }
    h3 {
      font-weight: 400;
      font-size: 14px;
    }
    b {
      font-weight: 500;
    }
    p {
      font-size: 14px;
      color: var(--gray200);
    }
    span {
      font-size: 18px;
    }
    @media (min-width: 900px) {
      width: 60%;
    }
  }
  .stars {
    font-size: 20px;
    color: var(--yellow200);
  }
  @media (min-width: 900px) {
    flex-direction: row;
    text-align: left;
  }
  .button {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    h1 {
      color: var(--purple200);
      font-weight: 500;
      font-size: 20px;
    }
    button {
      width: 100%;
    }
    @media (min-width: 900px) {
      width: 20%;
    }
  }
`;
