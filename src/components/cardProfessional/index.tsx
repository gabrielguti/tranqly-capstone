import { ProfessionalContainer, Card } from "./styles";
import { useHistory } from "react-router";
import { useContext } from "react";
import { ProfessionalContext } from "../../providers/professionals";
import { FaStar } from "react-icons/fa";
import Button from "../button";

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
  average: number;
}

const CardProfessional = ({ professional, average }: CardProfessionalProps) => {
  const history = useHistory();
  const { renderization } = useContext(ProfessionalContext);
  const { name, image, description, areas, profession } = professional;

  const schedule = (name: string) => {
    renderization(name);

    return history.push("/profileprofessional");
  };
  return (
    <ProfessionalContainer>
      <Card>
        <div className="img">
          <img src={professional.image} alt={professional.name} />
        </div>
        <div className="infos">
          <div>
            <h2>{professional.name}</h2>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>{professional.profession}</p>
            <p>{professional.areas}</p>
          </div>
          <div>
            <span>{professional.description}</span>
          </div>
        </div>
        <div className="button">
          <Button onClick={() => schedule(professional.name)}>Agendar</Button>
        </div>
      </Card>
    </ProfessionalContainer>
  );
};

export default CardProfessional;
