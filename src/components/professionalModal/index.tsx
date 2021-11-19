import { useState } from "react";
import { Container, ModalBox } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import moment from "moment";
import api from "../../services/api";
import { UseAuth } from "../../providers/authProvider";
import { StarRating } from "../starRating";
import toast from "react-hot-toast";

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
  const [newScore, setNewScore] = useState<Number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { accessToken } = UseAuth();

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
      .then((_) => {
        toast.success("Sucesso ao criar agendamento");
        searchDate(userData.id, accessToken);
        activateModal(modalType);
      })
      .catch((_) => toast.error("Falha ao criar agendamento"));
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
        {modalType === "comment" && <StarRating setNewScore={setNewScore} />}
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
