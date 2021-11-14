import styled from "styled-components";

export const CardCommentStyle = styled.div`
  margin-top: 20px;
  width: 1280px;
  max-width: 300px;
  height: 140px;
  background-color: var(--purple100);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 10px;
  color: white;
  text-align: left;
  .data {
    display: flex;
    gap: 10px;
    align-items: baseline;
  }
  .comment {
    font-size: 10px;
  }
  .stars {
    display: flex;
    gap: 2px;
    svg {
      color: var(--yellow200);
    }
  }
`;
