import styled from "styled-components";

export const ModalCommentStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  div {
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
    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      label {
        font-size: 12px;
        width: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      input {
        background-color: var(--gray100);
        padding: 0 20px;
        width: 385px;
        height: 50px;
        border-radius: 10px;
      }
      span {
        font-size: 12px;
        color: var(--red50);
        margin: 5px 0;
      }
      button {
        width: 100%;
        max-width: 250px;
        padding: 0 10px;
        height: 50px;
        border-radius: 5px;
        background-color: var(--orange200);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 22px;
        :hover {
          filter: brightness(1.2);
        }
      }
    }
  }
`;
