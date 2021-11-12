/* eslint-disable array-callback-return */
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
  date: string;
  id: number;
}

const ProfileProfessional = () => {
  const [calendar, setCalendar] = useState<dataProps[]>([]);
  let ref: string[] = [];
  // const now = moment();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRlcmljb0BtYXNvbWVuby5jb20iLCJpYXQiOjE2MzY2ODIzMTYsImV4cCI6MTYzNjY4NTkxNiwic3ViIjoiMSJ9.W1MApBtshV1AAi8EpUOZoNKnfXmYGuSreC_XtWBVtBA";

  useEffect(() => {
    api
      .get("/users/1/professional", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCalendar(response.data))
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  }, []);

  console.log(calendar);
  console.log(ref);

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
          {calendar.sort().map((item) => {
            if (!ref.includes(item.date) && ref.push(item.date)) {
              return (
                <div className="week">
                  <div className="day">
                    <p>{moment(item.date).format("ddd")}</p>
                  </div>
                  <div className="times">
                    {calendar
                      .filter((fil) => fil.date === item.date)
                      .map((str) => {
                        return (
                          <div className="time">
                            <p style={{ textAlign: "center" }}>
                              {moment(str.date).format("DD/MM/YYYY")}
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>{moment(str.date).format("LT")}</span>
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
            }
          })}
        </div>
      </Calendar>
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
