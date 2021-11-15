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
  profession: string;
  description: string;
  image: string;
  areas: [];
}

interface CardProfessionalProps {
  professional: ProfessionalData;
  average?: number;
}

const CardProfessional = ({ professional, average }: CardProfessionalProps) => {
  const history = useHistory();
  const { renderization } = useContext(ProfessionalContext);
  const { name, image, description, areas, profession, id } = professional;

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
     if(media===false){
       media=0
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
                <StarsCount stars={media}/>
            <p>{profession}</p>
            <p>{areas}</p>
          </div>
          <div>
            <span>{description}</span>
          </div>
        </div>
        <div className="button">

          <Button onClick={() => schedule(professional.name, professional.id)}>Agendar</Button>

        </div>
      </Card>
    </ProfessionalContainer>
  );
};

export default CardProfessional;
