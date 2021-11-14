import styled from "styled-components";

export const ContaiinerProfileInfo = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color:red;
  }
  margin-bottom: 10vh;
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
    justify-content: space-between;
    overflow-x: auto;
    box-shadow: 0px 0px 20px var(--gray200);
    border: 0;
    border-radius: 5px;
  }
  @media (min-width: 940px) {
    /* width: 900px; */
  }
`;
