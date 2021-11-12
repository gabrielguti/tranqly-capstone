/* eslint-disable array-callback-return */
import { Calendar, ContainerProfessionalData, Comments, Line } from "./styles";
import Bar from "../../components/bar";
import profile from "../../assets/img/profile.png";
import { FaStar } from "react-icons/fa";
import Button from "../../components/button";
import CardComments from "../../components/CardComments";
import { useEffect, useState } from "react";
import api from "../../services/api";
import moment from "moment";
import "moment/locale/pt-br";
import { FaCheck, FaRegClock, FaTimes } from "react-icons/fa";
import { UseAuth } from "../../providers/authProvider";
interface DataProps {
  userId: number;
  type: boolean;
  date: any;
  id: number;
}

interface CommentsProps {
  namePatient: string;
  comment: string;
  id: number;
  patientId: number;
  professionalId: number;
}

interface CreateCommentsProps {
  newComment: string;
  newScore: number;
}

const ProfileProfessional = () => {
  const [calendar, setCalendar] = useState<DataProps[]>([]);
  const [comments, setComments] = useState<CommentsProps[]>([]);
  let ref: string[] = [];
  const [newComment, setNewComment] = useState("");
  const [newScore, setNewScore] = useState(5);
  const now = moment();
  const [show, setShow] = useState(false);
  // const { accessToken, user } = UseAuth();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRlcmljb0BtYXNvbWVuby5jb20iLCJpYXQiOjE2MzY3NTAwMzIsImV4cCI6MTYzNjc1MzYzMiwic3ViIjoiMSJ9.nX0oaY6W6_INLUy-DqC1SvpNUvpVNT-aEjG15hkmHPA";
  const searchDate = () => {
    api
      .get(`/users/${1}/professional`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCalendar(response.data))
      .catch((e) => console.log(e));
  };

  const searchComments = () => {
    api
      .get(`/professional/${1}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setComments(response.data))
      .catch((e) => console.log(e));
  };

  const createComment = ({ newComment, newScore }: CreateCommentsProps) => {
    const newData = {
      comment: newComment,
      score: newScore,
    };
    if (newComment.length > 10 && newComment.length < 200) {
      api
        .post(`/professional/${1}/comments`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          searchComments();
          setShow(!show);
        })
        .catch((e) => console.log(e));
    }
    alert("");
  };

  const addMyCalendar = (data: any) => {
    const newTime = { ...data, patientId: 2 };
    api
      .post(`/patient`, newTime, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => searchDate())
      .catch((e) => console.log(e));
  };

  const check = (id: number) => {
    api
      .patch(
        `/professional/${id}`,
        { type: false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => addMyCalendar(response.data))
      .then((_) => searchDate())
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    searchDate();
    searchComments();
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
          {calendar.length > 0 ? (
            <>
              {calendar
                .sort((n) => n.date)
                .map((item, index) => {
                  if (!ref.includes(item.date) && ref.push(item.date)) {
                    return (
                      <div key={index} className="week">
                        <div className="day">
                          <p>{moment(item.date).format("ddd")}</p>
                        </div>
                        <div className="times">
                          {calendar
                            .filter((f) => f.date === item.date)
                            .filter((fil) => fil.type === true)
                            .map((m, secoundIndex) => {
                              return (
                                <div key={secoundIndex} className="time">
                                  <p>{moment(m.date).format("DD/MM/YYYY")}</p>
                                  <div>
                                    <span className="check">
                                      {moment(m.date).format("LT")}
                                    </span>
                                    <span>
                                      <FaCheck onClick={() => check(m.id)} />
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
            </>
          ) : (
            <div className="nothingHere">
              <FaRegClock />
              <h1>Não há horarios disponíveis com este especialista... </h1>
            </div>
          )}
        </div>
      </Calendar>
      <Comments>
        <h1>Comentários</h1>
        <Button onClick={() => setShow(!show)}>Criar comentário</Button>
        <div className="containerComment">
          {comments.map((item) => {
            return <CardComments comments={item} />;
          })}
          {show && (
            <div className="modal">
              <FaTimes onClick={() => setShow(!show)} />
              <textarea
                placeholder="Seu comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <input
                placeholder="Sua Nota"
                value={newScore}
                onChange={(e) => setNewScore(Number(e.target.value))}
              ></input>
              <Button onClick={() => createComment({ newComment, newScore })}>
                Comentar
              </Button>
            </div>
          )}
        </div>
      </Comments>
      <Line />
    </>
  );
};

export default ProfileProfessional;
function type(
  arg0: string,
  type: any,
  arg2: boolean,
  arg3: { headers: { Authorization: string } }
) {
  throw new Error("Function not implemented.");
}
