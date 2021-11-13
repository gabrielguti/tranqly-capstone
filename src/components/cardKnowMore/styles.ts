import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    margin-top: 60px;
    padding: 20px;
    width: 100%;
    max-width: 900px;
    height: 90%;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(69, 36, 122, 1) 0%, #9677d9 98.95%);
    color: var(--gray100);
    display: flex;
    gap: 40px;
    flex-direction: column;
    overflow-y: scroll;
    @media (min-width: 800px) {
      padding: 100px;
    }
    h1 {
      font-size: 2rem;
    }
    svg {
      color: black;
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 30px;
      cursor: pointer;
    }
    p {
      font-size: 1.3rem;
    }
    @media (min-width: 800px) {
      font-size: 1rem;
    }
    @media (min-width: 800px) {
      overflow-y: unset;
    }
  }
`;
