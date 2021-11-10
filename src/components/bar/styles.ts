import styled from "styled-components";

export const BarContainer = styled.div`
  width: 100vw;
  height: 70px;
  background: linear-gradient(90deg, rgba(69, 36, 122, 0.87) 0%, #9677d9 100%);
  .barWidth {
    width: 100%;
    height: inherit;
    max-width: 1280px;
    padding: 0 60px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      :hover {
        cursor: pointer;
      }
    }
    svg {
      font-size: 30px;
      cursor: pointer;
      :hover {
        color: var(--gray100);
      }
    }
  }
`;
