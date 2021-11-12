import styled from "styled-components";

export const MainContainer = styled.div``;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 25vh;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, rgba(69, 36, 122, 0.87) 0%, #9677d9 100%);
  @media only screen and (max-width: 1023px) {
    height: 40vh;
  }

  .InfoHeader {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1,
    p {
      color: var(--gray100);
    }
    button {
      width: 150px;
      height: 30px;
      border-radius: 7px;
      background: var(--orange100);
      color: white;
    }

    @media only screen and (max-width: 767px) {
      height: 100%;
      h1 {
        font-size: 1.5em;
      }
      p {
        font-size: 0.7em;
      }
    }
    @media only screen and (max-width: 1024px) {
      height: 80%;
    }

    @media only screen and (min-width: 1024px) {
      height: 70%;
      width: 40%;
      h1 {
        font-size: 0.8em;
      }
      p {
        font-size: 0.5em;
      }
    }
  }
  > img {
    height: 100%;
    width: 25%;

    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }
`;

export const MainInfoContainer = styled.div`
  .mainTitle {
    text-align: center;
    padding: 10px;
  }

  .Carousel {
    padding: 10px;
    background: var(--gray50);

    @media only screen and (max-width: 425px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  .RatingDiv {
    h2 {
      text-align: center;
      padding: 10px;
    }

    .Ratings {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      @media only screen and (min-width: 1024px) {
        flex-direction: row;
      }
      .ratingInfo {
        width: 80%;
        max-width: 350px;
        height: 20%;
        max-height: 150px;
        background: var(--purple100);
        @media only screen and (min-width: 1024px) {
          width: 28%;
          height: 80%;
        }
      }
    }
  }

  .LastInfo {
    width: 90%;
    height: 50vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media only screen and (min-width: 768px) {
      height: 30vh;
    }
  }

  .CreatorsInfo {
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    background: var(--gray50);
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }
    .CardTeam {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
`;
