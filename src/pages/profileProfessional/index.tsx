import { Calendar, ContainerProfessionalData, Coment } from "./styles";
import Bar from "../../components/bar";
import profile from "../../assets/img/profile.png";
import { FaStar } from "react-icons/fa";
import Button from "../../components/button";
import CardComent from "../../components/CardComent";

const ProfileProfessional = () => {
  return (
    <>
      <Bar />
      <ContainerProfessionalData>
        <div className="ProfessionalData">
          <div className="img">
            <img src={profile} alt="imgProfile" />
          </div>
          <div className="data">
            <div>
              <h2>FREDERICO MASOMENO</h2>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <span>Psicologo</span>
              <span>Traumas | TEPT | Relacionamentos</span>
            </div>
            <div>
              <p>
                Psicologo formado na Faculdade Imaginária de Natanlandia com
                especialização em traumas e relacionamentos. Com experiência em
                muitos lugares loucos mano. Dattebayo.
              </p>
            </div>
          </div>
        </div>
      </ContainerProfessionalData>
      <Calendar>
        <div className="tittle">Escolha seu horário</div>
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
    </>
  );
};

export default ProfileProfessional;
