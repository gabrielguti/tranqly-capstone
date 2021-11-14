import styled from "styled-components";

export const CardPro = styled.div`
  box-shadow: 0px 0px 4px;
  border-radius: 5px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  width: 250px;
  margin-bottom: 7vh;
  @media (min-width: 1000px) {
    height: 350px;
  }
`;

export const Date = styled.div`
  width: 100%;
  height: 8vh;
  background-color: var(--purple200);
  color: var(--gray200);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.div`
  width: 100%;
  height: 8vh;
  background-color: var(--purple400);
  color: var(--gray200);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 90%;
  margin-top: 5vh;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    margin-top: 2vh;
    background-color: var(--red50);
    width: 60%;
    :hover {
      opacity: 0.8;
      background-color: var(--red50);
    }
    @media (min-width: 900px) {
      margin-top: 5vh;
    }
  }

  h4 {
    font-weight: bolder;
  }
  svg {
    font-size: 20px;
    color: var(--yellow200);
  }
  span {
    font-weight: lighter;
  }
`;

export const Line = styled.hr`
  width: 90%;
  background-color: var(--purple400);
  height: 3px;
  margin-bottom: 5vh;
  @media (min-width: 700px) {
    width: 900px;
  }
`;
