import { FaUserAlt } from "react-icons/fa";
import StarsCount from "../starsCount";
import { CardComentStyle } from "./styles";

interface CardCommentData {
  name?: string;
  comment?: string;
  note?: number;
}

export default function CardComent({ name, comment, note }: CardCommentData) {
  return (
    <CardComentStyle>
      <div className="data">
        <FaUserAlt />
        {name || "Monalisa"}
      </div>
      <div className="coment">
        {comment ||
          "Eu sempre odiei terapia, o app veio simplesmente pra suprir essa minha demanda. Estou mudando minha vida por ter tido essa oportunidade!"}
      </div>
      <div className="stars">
        <StarsCount stars={note} />
      </div>
    </CardComentStyle>
  );
}
