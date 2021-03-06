import styled from "styled-components";

export const CardPro = styled.div`
  box-shadow: 0px 0px 4px;
  border-radius: 5px;
  height: 350px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  div {
    width: 300px;
  }
  button {
    background-color: var(--red50);
    width: 130px;
    height: 40px;
    margin-bottom: 10px;
    :hover {
      background-color: var(--red100);
    }
  }
`;

export const Date = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--purple200);
  color: var(--gray200);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.div`
  width: 100%;
  height: 50px;
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
  margin: 10px;
  max-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  #cancel {
    color: var(--red50);
  }
  @media (min-width: 900px) {
    margin-top: 30px;
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

export const Line = styled.div`
  width: 98%;
  max-width: 1280px;
  border-top: 2px solid var(--purple200);
  margin: 20px auto;
  padding: 30px;
`;
