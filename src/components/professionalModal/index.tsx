import { useState } from "react";
import { Container, ModalBox } from "./styles";
import DatePicker from "react-datepicker";

interface ModalProps {
  activateModal: (value: string) => void;
  modalType: string;
}

export const ProfessionalModal = ({ activateModal, modalType }: ModalProps) => {
  const [stars, setStars] = useState<Number>(0);
  const [displayStar, setDisplayStar] = useState<Number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());

  const enterHoverStar = (currentStar: Number) => {
    setDisplayStar(currentStar);
  };
  const leaveHoverStar = () => {
    setDisplayStar(stars);
  };
  const changeRating = (currentStar: Number) => {
    setStars(currentStar);
  };
  const handleOnChange = (newDate: Date) => {
    setStartDate(newDate);
  };

  return (
    <Container>
      <ModalBox>
        {modalType === "event" && (
          <>
            <h3>Descreva este evento</h3>
            <textarea
              className="eventDetails"
              placeholder="Descrição do evento"
            />
          </>
        )}
        {modalType === "comment" && (
          <>
            <h3>Comente sobre o profissional</h3>
            <input type="text" placeholder="Seu comentário aqui" />
            <div>
              <span
                className={
                  displayStar >= 1 ? "fa fa-star checked" : "fa fa-star"
                }
                onPointerEnter={() => enterHoverStar(1)}
                onPointerLeave={() => leaveHoverStar()}
                onClick={() => changeRating(1)}
              ></span>
              <span
                className={
                  displayStar >= 2 ? "fa fa-star checked" : "fa fa-star"
                }
                onPointerEnter={() => enterHoverStar(2)}
                onPointerLeave={() => leaveHoverStar()}
                onClick={() => changeRating(2)}
              ></span>
              <span
                className={
                  displayStar >= 3 ? "fa fa-star checked" : "fa fa-star"
                }
                onPointerEnter={() => enterHoverStar(3)}
                onPointerLeave={() => leaveHoverStar()}
                onClick={() => changeRating(3)}
              ></span>
              <span
                className={
                  displayStar >= 4 ? "fa fa-star checked" : "fa fa-star"
                }
                onPointerEnter={() => enterHoverStar(4)}
                onPointerLeave={() => leaveHoverStar()}
                onClick={() => changeRating(4)}
              ></span>
              <span
                className={
                  displayStar === 5 ? "fa fa-star checked" : "fa fa-star"
                }
                onPointerEnter={() => enterHoverStar(5)}
                onPointerLeave={() => leaveHoverStar()}
                onClick={() => changeRating(5)}
              ></span>
            </div>
          </>
        )}
        {modalType === "availability" && (
          <>
            <h3>Nova disponibilidade</h3>
            {/* <input
              type="datetime-local"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChange(e.target.value)
              }
            /> */}
            <DatePicker
              selected={startDate}
              onChange={(e: Date) => handleOnChange(e)}
            />
          </>
        )}
        <div className="confirmHolder">
          <button
            className="cancelButton"
            onClick={() => activateModal(modalType)}
          >
            Cancelar
          </button>
          <button className="confirmButton">Confirmar</button>
        </div>
      </ModalBox>
    </Container>
  );
};
