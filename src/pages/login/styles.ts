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
    margin-left: 1.5vw;
  }

  .FormDiv {
    > h1 {
      text-align: center;
    }

    > p {
      margin-top: 5vh;
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
      height: 300px;
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
    margin-top: 15vh;
    > img {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    .FormDiv {
      position: absolute;
      top: 20%;
      right: 10%;
    }
  }
  @media only screen and (min-width: 1440px) {
    > img {
      margin-left: 15vw;
    }
  }
  @media only screen and (min-width: 2560px) {
    .FormDiv {
      right: 30%;
    }
  }
`;