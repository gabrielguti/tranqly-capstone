import { Calendar, ContainerProfessionalData, Coment, Line } from "./styles";
import Bar from "../../components/bar";
import profile from "../../assets/img/profile.png";
import { FaStar } from "react-icons/fa";
import Button from "../../components/button";
import CardComent from "../../components/CardComent";
import { useContext } from "react";
import { ProfessionalContext } from "../../providers/professionals";
import CardProfessionalData from "../../components/cardProfessionalData";

const ProfileProfessional = () => {

  const {sProfess}=useContext(ProfessionalContext)
  console.log(sProfess)
  return (
    <>
      <Bar />
      <ContainerProfessionalData>
        <CardProfessionalData professional={sProfess[0]}/>
      </ContainerProfessionalData>
      <Calendar>
        <div className="tittle">
          <p>Escolha seu horário</p>
        </div>
        <div className="container">
          <div className="week">
            <div className="day">
              <p>Domingo</p>
            </div>
            <div className="times">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
          </div>
          <div className="week">
            <div className="day">
              <p>Segunda</p>
            </div>
            <div className="times">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
          </div>
          <div className="week">
            <div className="day">
              <p>Terça</p>
            </div>
            <div className="times">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
          </div>
          <div className="week">
            <div className="day">
              <p>Quarta</p>
            </div>
            <div className="times">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
          </div>
          <div className="week">
            <div className="day">
              <p>Quinta</p>
            </div>
            <div className="times">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
          </div>
          <div className="week">
            <div className="day">
              <p>Sexta</p>
            </div>
            <div className="times">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
          </div>
          <div className="week">
            <div className="day">
              <p>Sábado</p>
            </div>
            <div className="times">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
          </div>
        </div>
      </Calendar>
      <br></br>
      <Coment>
        <h1>Comentários</h1>
        <Button>Criar comentário</Button>
        <div className="containerComent">
          <CardComent />
          <CardComent />
          <CardComent />
          <CardComent />
          <CardComent />
          <CardComent />
        </div>
      </Coment>
      <Line />
    </>
  );
};

export default ProfileProfessional;
