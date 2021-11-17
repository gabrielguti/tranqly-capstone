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
      justify-content: center;
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
      /* max-width: 350px; */
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
  padding-top: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tittle {
    width: 100%;
    max-width: 940px;
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
    max-width: 940px;
    height: 625px;
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
  .time {
    min-width: 90px;
    width: 100%;
    font-weight: bold;
    height: 60px;
    background-color: white;
    border-radius: 10px;
    margin: 5px 0;
    color: white;
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
    background-color: var(--orange200);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;  
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
    width: 100%;
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
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
