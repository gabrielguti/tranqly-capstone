import styled from "styled-components";

export const ContainerProfessionalData = styled.div`
  background: linear-gradient(90deg, rgba(69, 36, 122, 0.87) 0%, #9677d9 100%);
  width: 100%;
  margin: auto;
  .ProfessionalData {
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media (min-width: 700px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: left;
    }
    .img {
      width: 100%;
      height: 100%;
      max-width: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      div {
        margin: 10px;
        width: 200px;
        display: flex;
        gap: 20px;
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 4px solid var(--purple100);
      }
    }
    .data {
      margin-bottom: 50px;
      padding: 5px;
      width: 100%;
      display: flex;
      gap: 30px;
      flex-direction: column;
      color: var(--gray200);

      div {
        flex-direction: column;
        svg {
          font-size: 20px;
          color: var(--yellow200);
        }
        span {
          font-size: 14px;
        }
      }
      h2 {
        color: var(--gray100);
      }
      h3 {
        color: var(--gray200);
      }
      .stars {
        display: flex;
        flex-direction: row;
        gap: 3px;
        margin-top: 5px;
        justify-content: center;
        @media (min-width: 700px) {
          /* justify-content: left; */
        }
      }
    }
  }
`;

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
      input {
        background-color: var(--gray100);
        padding: 0 20px;
        max-width: 385px;
        width: 100%;
        height: 40px;
        border-radius: 10px;
      }
    }
  }
`;
