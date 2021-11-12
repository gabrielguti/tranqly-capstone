import { useContext } from "react"
import {FaStar}from "react-icons/fa"
import { ProfessionalContext } from "../../providers/professionals"


interface ProfessionalData {
    name:string;
    profession:string;
    description:string;
    image:string;
    areas:[]
}

interface CardProfessionalProps{
    professional:ProfessionalData;
}

const CardProfessionalData = ({professional}:CardProfessionalProps)=>{
    
    return(
        
        
        <div className="ProfessionalData">
          <div className="img">
            <img src={professional.image} alt={professional.name} />
          </div>
          <div className="data">
            <div>
              <h2>{professional.name}</h2>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <p>{professional.profession}</p>
              {professional.areas.map((area, index)=>{
                    return <p key={index}>{area}</p>
                })}
            </div>
            <div>
              <p>
                {professional.description}
              </p>
            </div>
          </div>
        </div>
        
      
    )
}
export default CardProfessionalData