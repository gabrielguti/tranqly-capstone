import { useState } from "react";
import { Container, ModalBox } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import moment from "moment";
import api from "../../services/api";
import { UseAuth } from "../../providers/authProvider";

interface ModalProps {
  activateModal: (value: string) => void;
  searchDate: (id: number, token: string) => void;
  modalType: string;
}

export const ProfessionalModal = ({
  activateModal,
  modalType,
  searchDate,
}: ModalProps) => {
  const [stars, setStars] = useState<Number>(0);
  const [displayStar, setDisplayStar] = useState<Number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { accessToken } = UseAuth();

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

  const setNewAvailability = (e: any) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("@tranqyl:user") || "");
    const data = {
      type: true,
      date: moment(startDate).format(),
      userId: userData.id,
    };
    api
      .post("/professional", data, {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("@tranqyl:accessToken") || ""
          }`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    searchDate(userData.id, accessToken);
    activateModal(modalType);
  };

  return (
    <Container>
      <ModalBox onSubmit={setNewAvailability}>
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
          <DatePicker
            selected={startDate}
            locale={ptBR}
            showTimeSelect
            timeFormat="p"
            dateFormat="Pp"
            timeIntervals={60}
            onChange={(e: Date) => handleOnChange(e)}
          />
        )}
        <div className="confirmHolder">
          <button
            className="cancelButton"
            onClick={() => activateModal(modalType)}
          >
            Cancelar
          </button>
          <button className="confirmButton" type="submit">
            Confirmar
          </button>
        </div>
      </ModalBox>
    </Container>
  );
};
