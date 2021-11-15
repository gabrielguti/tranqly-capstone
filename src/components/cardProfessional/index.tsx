import { ProfessionalContainer, Card } from "./styles";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import { ProfessionalContext } from "../../providers/professionals";
import { FaStar } from "react-icons/fa";
import Button from "../button";
import api from "../../services/api";
import StarsCount from "../contStars";

interface ProfessionalData {
  id: number;
  name: string;
  image: string;
  type: string;
  profession: string;
  description: string;
  areas: string;
  language: string;
  gender: string;
  price: number;
  state: string;
  crp: string;
}

interface CardProfessionalProps {
  professional: ProfessionalData;
}

const CardProfessional = ({ professional }: CardProfessionalProps) => {
  const history = useHistory();
  const { renderization } = useContext(ProfessionalContext);
  const {
    name,
    image,
    description,
    areas,
    profession,
    id,
    state,
    language,
    crp,
    price,
  } = professional;

  const schedule = (name: string, id: number) => {
    renderization(name, Number(id));
    return history.push(`/profileprofessional/${id}`);
  };

  const [comments, setComments] = useState([]);

  useEffect(() => {
    api
      .get(
        `https://testes-laudemir.herokuapp.com/comments?professionalId=${professional.id}`
      )
      .then((response) => setComments(response.data))
      .catch((e) => console.log(e));
  }, [professional.id]);

  let media =
    comments.length > 0 &&
    Math.round(
      comments.reduce(
        (total: any, atual: { score: any }) => total + atual.score,
        0
      ) / comments.length
    );
  if (media === false) {
    media = 0;
  }

  return (
    <ProfessionalContainer>
      <Card>
        <div className="img">
          <img src={image} alt={name} />
        </div>
        <div className="infos">
          <div>
            <h2>{name}</h2>
            <StarsCount stars={media} />
            <h3>
              {profession} | <b>{crp}</b>
            </h3>
            <h4>
              {state} | {language}
            </h4>
            <p>{areas}</p>
          </div>
          <div>
            <span>{description}</span>
          </div>
        </div>
        <div className="button">
          <h1>R$ {price},00</h1>
          <Button onClick={() => schedule(professional.name, professional.id)}>
            Agendar
          </Button>
        </div>
      </Card>
    </ProfessionalContainer>
  );
};

export default CardProfessional;
