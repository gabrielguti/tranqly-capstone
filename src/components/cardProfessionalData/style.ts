import styled from "styled-components";

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
    @media (min-width: 700px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: left;
    }
    .img {
      width: 100%;
      height: 100%;
      max-width: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      div {
        margin: 10px;
        width: 250px;
        display: flex;
        gap: 20px;
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 4px solid var(--purple100);
      }
    }
    .data {
      margin-bottom: 50px;
      padding: 5px;
      width: 100%;
      display: flex;
      gap: 30px;
      flex-direction: column;
      color: var(--gray200);

      div {
        flex-direction: column;
        svg {
          font-size: 20px;
          color: var(--yellow200);
        }
        span {
          font-size: 14px;
        }
      }
      h2 {
        color: var(--gray100);
      }
      h3 {
        color: var(--gray200);
      }
      .stars {
        display: flex;
        flex-direction: row;
        gap: 3px;
        margin-top: 5px;
        justify-content: center;
        @media (min-width: 700px) {
          /* justify-content: left; */
        }
      }
    }
  }
  .zoom {
    color: var(--black0);
  }
`;
