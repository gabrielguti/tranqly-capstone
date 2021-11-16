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
    width: 80%;
    justify-content: flex-start;
    overflow-x: auto;
    box-shadow: 0px 0px 20px var(--gray200);
    border: 0;
    border-radius: 5px;
  }
`;
