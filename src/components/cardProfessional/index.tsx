import {
  ButtonSchedule,
  ContainerAreas,
  ContainerButtonSchedule,
  ContainerDescription,
  ContainerImgProfessional,
  ContainerName,
  ContainerProfession,
  ContainerProfessional,
  ContainerSkylls,
  PAreas,
  PDescription,
  PProfession,
} from "./styles";
import { useHistory } from "react-router";
import { useContext } from "react";
import { ProfessionalContext } from "../../providers/professionals";
import StarsCount from "../stars";

interface ProfessionalData {
  id:number;
  name: string;
  profession: string;
  description: string;
  image: string;
  areas: [];
}

interface CardProfessionalProps {
  professional: ProfessionalData;
  average: number
}


const CardProfessional = ({ professional, average}: CardProfessionalProps, ) => {
  const history = useHistory();
  const { renderization } = useContext(ProfessionalContext);
  const {name, image, description, areas, profession}=professional

  const schedule = (name: string) => {
    renderization(name);

    return history.push("/profileprofessional");
  };
  return (
    <>
    {}
    
    <ContainerProfessional>
      <ContainerImgProfessional>
        <img src={image} alt={name} />
      </ContainerImgProfessional>
      <ContainerName>
        <p>{name}</p>
        <StarsCount stars={average}/>
      </ContainerName>
      <ContainerSkylls>
        <ContainerProfession>
          <PProfession>{profession}</PProfession>
        </ContainerProfession>
        <ContainerAreas>
          <PAreas>{areas}</PAreas>
        </ContainerAreas>
        <ContainerDescription>
          <PDescription>{description}</PDescription>
        </ContainerDescription>
      </ContainerSkylls>
      <ContainerButtonSchedule>
        <ButtonSchedule onClick={() => schedule(professional.name)}>
          Agendar horário
        </ButtonSchedule>
      </ContainerButtonSchedule>
    </ContainerProfessional>
    </>
  );
};

export default CardProfessional;
