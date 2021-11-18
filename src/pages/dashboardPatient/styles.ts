import styled from "styled-components";

export const ContaiinerProfileInfo = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: red;
  }
  margin-bottom: 10vh;
`;

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
    padding: 20px;
    img {
      width: 150px;
      border-radius: 50%;
    }
  }
  .data {
    color: var(--gray100);
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .newComment {
    position: fixed;
    right: 10px;
    bottom: 10px;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: var(--purple300);
      width: 100px;
      font-size: 14px;
    }
  }
  .icon {
    background-color: var(--orange200);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: var(--gray50);
    cursor: pointer;
    :hover {
      background-color: var(--orange100);
      color: var(--purple100);
    }
  }
`;

export const SectionInfo = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: 0.9rem;
`;

export const CardsBox = styled.div`
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 90%;
    max-width: 1280px;
    justify-content: flex-start;
    overflow-x: auto;
    box-shadow: 0px 0px 20px var(--gray200);
    border: 0;
    border-radius: 5px;
  }
`;
