import styled from "styled-components";

export const Calendar = styled.div`
  width: 100%;
  padding: 30px 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tittle {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 970px;
    height: 70px;
    background-color: var(--purple300);
    font-size: 28px;
    font-weight: lighter;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border-radius: 50%;
      background-color: white;
    }
  }
  .container {
    width: 100%;
    max-width: 970px;
    height: 660px;
    display: flex;
    background-color: var(--gray50);
    overflow-x: scroll;
  }
  .week {
    height: 70px;
    width: 100%;
  }
  .day {
    height: 70px;
    width: 100%;
    min-width: 110px;
    background-color: var(--purple400);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .times {
    height: 70px;
    min-width: 160px;
    width: 100%;
    height: 485px;
    background-color: var(--gray50);
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 10px solid transparent;
  }
  .yellow,
  .green,
  .purple {
    min-width: 90px;
    width: 100%;
    font-weight: bold;
    height: 60px;
    background-color: white;
    border-radius: 10px;
    margin: 5px 0;
    color: var(--black0);
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    &:hover .moreInfos {
      display: flex;
      flex-direction: column;
      position: absolute;
      background-color: var(--purple400);
      border-radius: 10px;
      padding: 20px;
      color: var(--gray50);
      border: 3px solid var(--purple200);
    }
  }
  .yellow {
    background-image: linear-gradient(90deg, var(--yellow50) 15%, white 10%);
  }
  .green {
    background-image: linear-gradient(90deg, var(--green50) 15%, white 10%);
  }
  .purple {
    background-image: linear-gradient(90deg, var(--purple100) 15%, white 10%);
  }
  .nothingHere {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 30px;
    color: var(--purple100);
    opacity: 0.8;
    svg {
      font-size: 80px;
    }
  }
  .newAval {
    width: 20px;
    height: 20px;
    line-height: 115%;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  .moreInfos {
    display: none;
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  div {
    position: absolute;
    width: 90%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--gray50);
    border-radius: 10px;
    gap: 10px;
    padding: 20px 0;
    svg {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 20px;
      cursor: pointer;
    }
    label {
      font-size: 12px;
      width: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      input,
      textarea {
        background-color: var(--gray100);
        padding: 0 20px;
        max-width: 385px;
        width: 100%;
        height: 50px;
        border-radius: 10px;
      }
    }
  }
  .description {
    height: 100px;
    resize: none;
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
  h1 {
    text-align: center;
  }
  .containerComment {
    display: grid;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
