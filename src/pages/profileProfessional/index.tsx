/* eslint-disable array-callback-return */
import { Calendar, ContainerProfessionalData, Comments, Line } from "./styles";
import Bar from "../../components/bar";
import Button from "../../components/button";
import CardComments from "../../components/CardComments";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import ModalComment from "../../components/modalComment";
import { FaRegClock } from "react-icons/fa";
import CardProfessionalData from "../../components/cardProfessionalData";
import { useCalendar } from "../../providers/calendarProvider";
import { UseAuth } from "../../providers/authProvider";

const ProfileProfessional = () => {
  const {
    searchDate,
    searchComments,
    createComment,
    addMyCalendar,
    check,
    calendar,
    comments,
    newComment,
    newScore,
  } = useCalendar();

  const { accessToken, user } = UseAuth();
  const getProfessionalStorage = JSON.parse(
    localStorage.getItem("@tranqyl:prof") || ""
  );

  let ref: string[] = [];
  const [show, setShow] = useState(false);
  let now = new Date();

  useEffect(() => {
    searchDate(Number(getProfessionalStorage[0].id), accessToken);
    searchComments(Number(getProfessionalStorage[0].id), accessToken);
    console.log(calendar);
  }, []);
  console.log(calendar);
  const formed = calendar
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  return (
    <>
      <Bar />
      <ContainerProfessionalData>
        <CardProfessionalData professional={getProfessionalStorage[0]} />
      </ContainerProfessionalData>

      <Calendar>
        <div className="tittle">
          <p>Escolha seu horário</p>
        </div>
        <div className="container">
          {formed.length > 0 ? (
            <>
              {formed
                .filter((filtered) => filtered.type === true)
                .map((item, index) => {
                  if (
                    !ref.includes(moment(item.date).format("l")) &&
                    ref.push(moment(item.date).format("l")) &&
                    moment(now).format("l").replace(/\D/g, "") <=
                      moment(item.date).format("l").replace(/\D/g, "")
                  ) {
                    return (
                      <div key={index} className="week">
                        <div className="day">
                          <p>{moment(item.date).format("ddd")}</p>
                        </div>
                        <div className="times">
                          {formed
                            .filter(
                              (newFiltered) =>
                                moment(newFiltered.date).format("L") ===
                                moment(item.date).format("L")
                            )
                            .filter(
                              (filteredTimes) =>
                                moment(filteredTimes.date)
                                  .format()
                                  .replace(/\D/g, "") >
                                moment(now).format().replace(/\D/g, "")
                            )
                            .map((m, secondIndex) => {
                              return (
                                <div
                                  key={secondIndex}
                                  className="time"
                                  onClick={() => check(m.id, accessToken)}
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
