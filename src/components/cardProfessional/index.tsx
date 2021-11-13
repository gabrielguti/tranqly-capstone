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

  const schedule = (name: string) => {
    renderization(name);

    return history.push("/profileprofessional");
  };
  return (
    <>
    {}
    
    <ContainerProfessional>
      <ContainerImgProfessional>
        <img src={professional.image} alt={professional.name} />
      </ContainerImgProfessional>
      <ContainerName>
        <p>{professional.name}</p>
        <StarsCount stars={average}/>
      </ContainerName>
      <ContainerSkylls>
        <ContainerProfession>
          <PProfession>{professional.profession}</PProfession>
        </ContainerProfession>
        <ContainerAreas>
          <PAreas>{professional.areas}</PAreas>
        </ContainerAreas>
        <ContainerDescription>
          <PDescription>{professional.description}</PDescription>
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
