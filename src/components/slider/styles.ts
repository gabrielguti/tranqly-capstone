import styled from "styled-components";

export const MainContainer = styled.div`
  .ProfessionalInfo {
    display: flex;
    flex-direction: column;
    padding: 10px;

    > div {
      display: flex;
      flex-direction: column;
      > div {
        > div {
          > svg {
            color: var(--yellow200);
          }
        }
      }
      .areas {
        color: var(--gray200);
      }
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      > img {
        width: 40%;
        max-width: 300px;
      }
      > div {
        margin-left: 15px;
        max-width: 500px;
      }
    }
  }
  .RatingsInfo {
    > h2 {
      text-align: center;
    }
    > div {
      > div {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
`;
