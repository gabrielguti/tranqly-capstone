import { ContainerProfessionalData } from "./style";
import Profile from "../../assets/img/profile.png";
interface ProfessionalData {
  name: string;
  profession: string;
  description: string;
  image: string;
  areas: [];
}

interface CardProfessionalProps {
  professional: ProfessionalData;
}

const CardProfessionalProf = ({ professional }: CardProfessionalProps) => {
  const { name, image, areas, description } = professional;

  return (
    <ContainerProfessionalData>
      <div className="ProfessionalData">
        <div className="img">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <img src={Profile} alt={name} />
          )}
        </div>
        <div className="data">
          <div>
            <h2>{name}</h2>
            <div className="stars"></div>
          </div>
          <div>
            <p>{areas}</p>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </ContainerProfessionalData>
  );
};
export default CardProfessionalProf;
