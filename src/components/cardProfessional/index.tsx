import { ButtonSchedule, ContainerAreas, ContainerButtonSchedule, ContainerDescription, ContainerImgProfessional, ContainerName, ContainerProfession, ContainerProfessional, ContainerSkylls, PAreas, PDescription, PProfession, } from "./styles"
import { FaStar } from "react-icons/fa";


interface ProfessionalData {
    name:string;
    profession:string;
    description:string;
    image:string
}

interface CardProfessionalProps{
    professional:ProfessionalData;
}

const CardProfessional=({professional}:CardProfessionalProps)=>{
    
    return(
    <ContainerProfessional>
        <ContainerImgProfessional><img src={professional.image} alt={professional.name}/></ContainerImgProfessional>
            <ContainerName>
                <p>{professional.name}</p>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </ContainerName>
        <ContainerSkylls>
            <ContainerProfession><PProfession>{professional.profession}</PProfession></ContainerProfession>
            <ContainerAreas><PAreas>Traumas | TEPT | Relacionamentos</PAreas></ContainerAreas>
            <ContainerDescription><PDescription>{professional.description}</PDescription></ContainerDescription>
        </ContainerSkylls>
        <ContainerButtonSchedule>
            <ButtonSchedule>Agendar horário</ButtonSchedule>
        </ContainerButtonSchedule>
    </ContainerProfessional>)
}

export default CardProfessional