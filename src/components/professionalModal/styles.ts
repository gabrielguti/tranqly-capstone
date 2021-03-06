import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);

  .fa-star {
    cursor: pointer;
  }
  .checked {
    color: orange;
  }

  .exitHolder {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    span {
      cursor: pointer;
      width: 20px;
      height: 20px;
      background-color: gray;
      border-radius: 50%;
      text-align: center;
      line-height: 125%;
    }
  }
  .confirmHolder {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const ModalBox = styled.form`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  gap: 10px;
  max-width: 465px;
  width: 90%;

  input {
    height: 80px;
    max-width: 400px;
    width: 90%;
    background-color: var(--purple400);
    color: white;
    text-align: center;
    border-radius: 12px;
  }

  .eventDetails {
    height: 80px;
    max-width: 400px;
    width: 90%;
    background-color: var(--purple400);
    color: white;
    border-radius: 12px;
    text-align: start;
    padding: 10px;

    &::placeholder {
      color: var(--gray50);
      text-align: start;
    }
  }

  .cancelButton {
    border-radius: 5px;
    width: 40%;
    padding: 10px 0;
    border: 1px solid var(--black0);
  }

  .confirmButton {
    color: white;
    border-radius: 5px;
    width: 40%;
    background-color: var(--orange200);
  }

  .react-datepicker__input-container {
    display: flex;
    justify-content: center;
  }

  .react-datepicker__tab-loop {
    position: fixed;
    width: 100%;
  }
`;
