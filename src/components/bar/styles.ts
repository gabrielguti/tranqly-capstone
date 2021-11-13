import styled from "styled-components";

export const BarContainer = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(90deg, rgba(69, 36, 122, 0.87) 0%, #9677d9 100%);
  .barWidth {
    width: 100%;
    height: inherit;
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
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
  .burguer {
    .bm-burger-button {
      position: relative;
      width: 36px;
      height: 30px;
    }
    .bm-burger-bars {
      background: var(--black0);
    }
    .bm-cross {
      background: var(--gray200);
    }
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
      top: 0;
    }
    .bm-menu {
      background: var(--black0);
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
      opacity: 1;
    }
    .bm-menu {
      background: linear-gradient(
        220deg,
        rgba(69, 36, 122, 1) 0%,
        #9677d9 100%
      );
      text-align: center;
    }
    .bm-overlay {
      background: transparent !important;
    }
    a {
      color: var(--gray200);
      padding: 1em;
      text-transform: uppercase;
      transition: background 0.3s, box-shadow 0.3s;
      box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);
    }
    span {
      letter-spacing: 1px;
      font-weight: 400;
    }
  }
`;
