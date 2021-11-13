import styled from "styled-components";
import SignImg from "../../assets/img/IllustrationP16.svg";

export const Container = styled.section`
  a {
    color: var(--purple200);
  }
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    background: url(${SignImg});
    height: 80vh;
    background-repeat: no-repeat;
    /* margin-right: -50%; */
    width: 100%;
    background-position: center;
    background-size: contain;
    margin-top: 2vh;
  }
`;
export const Title = styled.div`
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 3vh;
  @media (min-width: 1000px) {
    margin-left: -50%;
  }
`;
export const BoxForm = styled.div`
  box-shadow: 0px 0px 12px gray;
  border-radius: 10px;
  height: 400px;
  width: 270px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    span {
      font-size: 0.7rem;
      color: var(--red50);
      height: 2vh;
    }
  }
  input {
    width: 80%;
    padding: 10px;
    border: 1px solid var(--purple100);
    border-radius: 5px;
    margin: 1vh;
    color: var(--purple200);
  }
  button {
    background-color: var(--purple100);
    color: var(--gray100);
    width: 80%;
    margin-top: 4vh;
    padding: 6px;
    border-radius: 5px;
    font-size: 1.2rem;
  }
  @media (min-width: 1000px) {
    margin-left: -50%;
  }
`;

export const FooterForm = styled.div`
  margin-top: 4vh;
  @media (min-width: 1000px) {
    margin-left: -50%;
  }
`;
