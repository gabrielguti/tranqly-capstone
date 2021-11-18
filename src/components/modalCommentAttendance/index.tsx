import moment from "moment";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useCalendar } from "../../providers/calendarProvider";
import Button from "../button";
import { ModalCommentStyle } from "./styles";

export default function ModalCommentAttendance({
  timeId,
  date,
  zoom,
  passwordZoom,
  accessToken,
  professionalId,
  patientId,
  areas,
  name,
  changeShow,
}: any) {
  const { check } = useCalendar();
  const [comment, setComment] = useState("");
  console.log(date);
  return (
    <ModalCommentStyle>
      <div>
        <span>{moment(date).format("LL")}</span>
        <FaTimes onClick={changeShow} />
        <h1>Fale sobre você..</h1>
        <textarea
          placeholder="Comente aqui..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          onClick={() => {
            check(
              timeId,
              accessToken,
              professionalId,
              patientId,
              areas,
              name,
              comment,
              zoom,
              passwordZoom
            );
            changeShow();
          }}
        >
          Agendar
        </Button>
      </div>
    </ModalCommentStyle>
  );
}
