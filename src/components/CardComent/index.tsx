import { FaStar, FaUserAlt } from "react-icons/fa";
import { CardComentStyle } from "./styles";

export default function CardComent() {
  return (
    <CardComentStyle>
      <div className="data">
        <FaUserAlt />
        Monalisa
      </div>
      <div className="coment">
        Eu sempre odiei terapia, o app veio simplesmente pra suprir essa minha
        demanda. Estou mudando minha vida por ter tido essa oportunidade!
      </div>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </CardComentStyle>
  );
}
