import { Calendar, ContainerProfessionalData, Coment, Line } from "./styles";
import Bar from "../../components/bar";
import profile from "../../assets/img/profile.png";
import { FaStar } from "react-icons/fa";
import Button from "../../components/button";
import CardComent from "../../components/CardComent";
import { useEffect, useState } from "react";
import api from "../../services/api";
import moment from "moment";
import "moment/locale/pt-br";
import { FaCheck } from "react-icons/fa";
interface dataProps {
  userId: number;
  disponivel: boolean;
  calendar: string;
  id: number;
}

const ProfileProfessional = () => {
  const [calendar, setCalendar] = useState<dataProps[]>([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvY29tQHByb2JlbWEuY29tIiwiaWF0IjoxNjM2NjUwNjg3LCJleHAiOjE2MzY2NTQyODcsInN1YiI6IjIifQ.v5h8N3dS5MPTlD_oRW_lpCQkHc0L56D7UjDBOn9WuTU";

  useEffect(() => {
    api
      .get("/profissional?userId=1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCalendar(response.data))
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  }, []);

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
              <p>Psicologo</p>
              <p>Traumas | TEPT | Relacionamentos</p>
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
        <div className="tittle">
          <p>Escolha seu horário</p>
        </div>
        <div className="container">
          {calendar.map((item) => {
            return (
              <div className="week">
                <div className="day">
                  <p>Domingo</p>
                </div>
                <div className="times">
                  {calendar.map((item) => {
                    return (
                      <div className="time">
                        <p style={{ textAlign: "center" }}>
                          {moment(item.calendar).format("DD/MM/YYYY")}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>{moment(item.calendar).format("LT")}</span>
                          <span>
                            <FaCheck />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Calendar>
      <br></br>
      <Coment>
        <h1>Comentários</h1>
        <Button>Criar comentário</Button>
        <div className="containerComent">
          <CardComent />
        </div>
      </Coment>
      <Line />
    </>
  );
};

export default ProfileProfessional;
