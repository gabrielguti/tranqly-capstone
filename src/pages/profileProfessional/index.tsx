/* eslint-disable array-callback-return */
import { Calendar, ContainerProfessionalData, Comments, Line } from "./styles";
import Bar from "../../components/bar";
import profile from "../../assets/img/profile.png";
import Button from "../../components/button";
import CardComments from "../../components/CardComments";
import { useEffect, useState } from "react";
import api from "../../services/api";
import moment from "moment";
import "moment/locale/pt-br";
import toast from "react-hot-toast";
import ModalComment from "../../components/modalComment";
import { FaCheck, FaRegClock, FaTimes } from "react-icons/fa";
import { UseAuth } from "../../providers/authProvider";
import CardProfessionalData from "../../components/cardProfessionalData";

interface DataProps {
  calendar: any;
  userId: number;
  type: boolean;
  date: any;
  id: number;
  calendar: any;
}

interface CommentsProps {
  namePatient: string;
  comment: string;
  id: number;
  patientId: number;
  professionalId: number;
  score:number
}

const ProfileProfessional = () => {
  const [calendar, setCalendar] = useState<DataProps[]>([]);
  const [comments, setComments] = useState<CommentsProps[]>([]);
  let ref: string[] = [];
  const [show, setShow] = useState(false);
  var now = new Date();

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

  const createComment = (newComment: string, newScore: number) => {
    const newData = {
      comment: newComment,
      score: newScore,
    };
    if (newComment.length <= 10) {
      toast.error("Descreva com mais detalhes seu comentário.");
    } else if (newComment.length > 200) {
      toast.error("Descreva com menos detalhes seu comentário");
    } else {
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
  };
  let soma = 0;
  let averag = 0;
 
    // eslint-disable-next-line no-lone-blocks
    {comments.map((val)=>{
      console.log(val.score)
      soma += val.score
      averag = Math.floor(soma/comments.length)
    })}

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


  const formed = calendar
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  const getProfessionalStorage = JSON.parse(localStorage.getItem("@tranqyl:prof")||"")

  return (
    <>
      <Bar />
      <ContainerProfessionalData>
      <CardProfessionalData professional={getProfessionalStorage[0]} average={averag}/>
      </ContainerProfessionalData>

      <Calendar>
        <div className="tittle">
          <p>Escolha seu horário</p>
        </div>
        <div className="container">
          {formed.length > 0 ? (
            <>
              {formed
                .sort((n) => n.date)
                .map((item, index) => {
                  if (
                    !ref.includes(item.date) &&
                    ref.push(item.date) &&
                    moment(now).format().replace(/\D/g, "") <=
                      moment(item.date).format().replace(/\D/g, "")
                  ) {
                    return (
                      <div key={index} className="week">
                        <div className="day">
                          <p>{moment(item.date).format("ddd")}</p>
                        </div>
                        <div className="times">
                          {formed
                            .filter((f) => f.date === item.date)
                            .filter((fil) => fil.type === true)
                            .map((m, secoundIndex) => {
                              return (
                                <div
                                  key={secoundIndex}
                                  className="time"
                                  onClick={() => check(m.id)}
                                >
                                  <p>{moment(m.date).format("DD/MM/YYYY")}</p>
                                  <span className="check">
                                    {moment(m.date).format("LT")}
                                  </span>
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
            <ModalComment
              show={show}
              setShow={setShow}
              createComment={createComment}
            />
          )}
        </div>
      </Comments>
      <Line />
    </>
  );
};

export default ProfileProfessional;
