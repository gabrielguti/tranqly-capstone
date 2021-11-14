import styled from "styled-components";
import ClientSingUpImg from "../../assets/img/IllustrationP16.svg";

export const Container = styled.section`
  max-width: 1280px;
  margin: auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    background: url(${ClientSingUpImg});
    height: 90vh;
    background-repeat: no-repeat;
    width: 100%;
    background-position: center;
    background-size: contain;
    margin-top: 10px;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 90vh;
  @media (min-width: 900px) {
    width: 40%;
  }
`;
export const ContainerImage = styled.div`
  height: 100%;
  width: 60%;
  display: none;
  @media (min-width: 900px) {
    display: flex;
  }
`;
export const BoxForm = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 450px;
  margin-top: 20px;
  width: 90%;
  margin-top: 50px;
  form {
    box-shadow: 0px 0px 12px gray;
    border-radius: 10px;
    height: 430px;
    padding: 10px;
    max-width: 400px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  h1 {
    font-size: 30px;
  }
  span {
    font-size: 12px;
    color: var(--red50);
    margin: 5px 0;
  }
  input {
    max-width: 320px;
    width: 100%;
    padding: 8px;
    border: 1px solid var(--purple100);
    border-radius: 5px;
    color: var(--purple200);
  }
  textarea {
    max-width: 320px;
    width: 100%;
    padding: 8px;
    border: 1px solid var(--purple100);
    border-radius: 5px;
    margin: 10px;
    color: var(--purple200);
  }
  button {
    background-color: var(--purple100);
    color: var(--gray100);
    width: 100%;
    max-width: 320px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
  }
`;
