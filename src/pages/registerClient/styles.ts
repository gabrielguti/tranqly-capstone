import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  position: relative;
  > img {
    width: 100vh;
    height: 80vh;
    margin-left: 3vw;
  }

  .FormDiv {
    > h1 {
      text-align: center;
    }

    > p {
      margin-top: 2vh;
      text-align: center;
      > a {
        color: var(--orange100);
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 40vh;
      margin: 0 auto;
      width: 300px;
      height: 500px;
      border-radius: 10px;
      box-shadow: 0px 0px 4px 4px #00000040;
      background: white;
      > input {
        padding: 10px;
        border: 2px solid var(--purple100);
        border-radius: 5px;
      }
      > button {
        background: var(--purple100);
        color: white;
        font-size: 1.1em;
        width: 90%;
        padding: 10px;
        border-radius: 5px;
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    margin-top: 10vh;
    > img {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    > img {
      margin-left: 8vw;
    }

    .FormDiv {
      position: absolute;
      top: 15%;
      left: 10%;
    }
  }
  @media only screen and (min-width: 1440px) {
    > img {
      margin-left: 20vw;
    }
    .FormDiv {
      top: 10%;
      left: 15%;
    }
  }
  @media only screen and (min-width: 2560px) {
    > img {
      margin-left: 30vw;
    }
    .FormDiv {
      top: 7%;
      left: 30%;
    }
  }
`;
