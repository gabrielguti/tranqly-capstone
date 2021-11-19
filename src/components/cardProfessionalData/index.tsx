import { useEffect, useState } from "react";
import { FaUserCog, FaUserEdit } from "react-icons/fa";
import api from "../../services/api";
import Button from "../button";
import StarsCount from "../contStars";
import { ContainerProfessionalData } from "./style";

interface ProfessionalData {
  name: string;
  profession: string;
  description: string;
  image: string;
  areas: string;
  gender: string;
  price: number;
  language: string;
  state: string;
  crp: string;
  zoom: string;
  passwordZoom: string;
  id: number;
}

interface CardProfessionalProps {
  professional: ProfessionalData;
  changeShowUser: () => void;
  changeShowProf: () => void;
  changeEdit: () => void;
}

const CardProfessionalData = ({
  professional,
  changeShowUser,
  changeShowProf,
  changeEdit,
}: CardProfessionalProps) => {
  const {
    name,
    image,
    areas,
    description,
    gender,
    price,
    language,
    state,
    crp,
    zoom,
    passwordZoom,
    id,
  } = professional;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    api
      .get(`https://tranqly.herokuapp.com/comments?professionalId=${id}`)
      .then((response) => setComments(response.data))
      .catch((e) => console.log(e));
  }, [id]);

  let media =
    comments.length > 0 &&
    Math.round(
      comments.reduce(
        (total: number, atual: { score: number }) => total + atual.score,
        0
      ) / comments.length
    );
  if (media === false) {
    media = 0;
  }

  return (
    <ContainerProfessionalData>
      <div className="ProfessionalData">
        <div className="img">
          <img src={image} alt={name} />
          <div>
            <Button onClick={changeShowUser}>
              <FaUserCog />
            </Button>
            <Button onClick={changeShowProf}>
              <FaUserEdit />
            </Button>
          </div>
          <Button onClick={changeEdit}> Editar usuário</Button>
        </div>
        <div className="data">
          <div>
            <h2>{name}</h2>
            <StarsCount stars={media} />
          </div>
          <div>
            <p>Especialidade: {areas}</p>
            <p>CRP: {crp}</p>
            <p>Idiomas: {language}</p>
            <p>Estado: {state}</p>
            <p>Genero: {gender}</p>
            <p>
              Link para sala para o{" "}
              <a className="zoom" href={zoom} target="_blank" rel="noreferrer">
                Zoom
              </a>
            </p>
            <p>Senha da sala: {passwordZoom}</p>
            <p>
              Preço:{" "}
              {price
                ? price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "Sem valor"}
              / 60 minutos
            </p>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </ContainerProfessionalData>
  );
};
export default CardProfessionalData;
