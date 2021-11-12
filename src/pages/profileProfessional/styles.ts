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
      align-items: flex-start;
      text-align: start;
    }
    .img {
      width: 100%;
      height: 100%;
      max-width: 350px;
      display: flex;
      justify-content: center;
      img {
        width: 230px;
        height: 230px;
      }
    }
    .data {
      margin-bottom: 50px;
      padding: 5px;
      max-width: 600px;
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
      .stars {
        display: flex;
        flex-direction: row;
        gap: 3px;
        margin-top: 5px;
        justify-content: center;
        @media (min-width: 700px) {
          justify-content: left;
        }
      }
    }
  }
`;

export const Calendar = styled.div`
  width: 100%;
  padding-top: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tittle {
    width: 100%;
    max-width: 770px;
    height: 70px;
    background-color: var(--purple300);
    font-size: 28px;
    font-weight: lighter;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    max-width: 770px;
    height: 625px;
    display: flex;
    background-color: var(--gray50);
    overflow-x: scroll;
  }
  .week {
  }
  .day {
    height: 70px;
    width: 110px;
    background-color: var(--purple400);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .times {
    width: 110px;
    height: 485px;
    background-color: var(--gray50);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .time {
    width: 90px;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    margin: 5px 0;
    color: black;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
    background-color: var(--orange200);
    p {
      text-align: center;
    }
    div {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      svg {
        color: white;
        :hover {
          color: var(--purple200);
        }
      }
    }
    :hover {
      background-color: var(--orange100);
    }
  }
  .nothingHere {
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
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
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
  .modal {
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 450px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    gap: 20px;
    svg {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      cursor: pointer;
    }
    textarea {
      width: 385px;
      height: 160px;
      border-radius: 10px;
      padding: 20px;
      background-color: var(--gray100);
    }
    input {
      background-color: var(--gray100);
      padding: 0 20px;
      width: 385px;
      height: 50px;
      border-radius: 10px;
    }
  }
`;

export const Line = styled.div`
  width: 80%;
  border-top: 3px solid var(--purple300);
  margin: 20px auto;
  padding: 20px;
`;
