import styled from "styled-components";

export const ModalCommentStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  color: black;
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
    width: 90%;
    max-width: 450px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    gap: 10px;
    textarea {
      background-color: var(--gray100);
      max-width: 385px;
      width: 90%;
      height: 100px;
      border-radius: 10px;
      padding: 10px;
    }
    svg {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      cursor: pointer;
    }
  }
`;
