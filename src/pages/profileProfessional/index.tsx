/* eslint-disable array-callback-return */
import { Calendar, ContainerProfessionalData, Comments } from "./styles";
import Bar from "../../components/bar";
import Button from "../../components/button";
import CardComments from "../../components/CardComments";
import { useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import ModalComment from "../../components/modalComment";
import { FaRegClock } from "react-icons/fa";
import CardProfessionalData from "../../components/cardProfessionalData";
import { useCalendar } from "../../providers/calendarProvider";
import { UseAuth } from "../../providers/authProvider";
import { useParams } from "react-router";
import { Line } from "../../components/dashboardCard/styles";

const ProfileProfessional = () => {
  const { searchDate, searchComments, check, calendar, comments } =
    useCalendar();
  const { id }: any = useParams();
  const { accessToken } = UseAuth();
  const getProfessionalStorage = JSON.parse(
    localStorage.getItem("@tranqyl:prof") || ""
  );
  let professionalId = Number(id);
  let ref: string[] = [];
  let now = new Date();
  const { show, setShow } = useCalendar();

  useEffect(() => {
    searchDate(id, accessToken);
    searchComments(professionalId, accessToken);
  }, [id]);

  const formed = calendar
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  const filters = formed.filter((item) => item.type === true);
  console.log(getProfessionalStorage[0].areas);
  const areas = getProfessionalStorage[0].areas;
  const name = getProfessionalStorage[0].name;
  console.log(formed);
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
          {filters.length > 0 ? (
            <>
              {formed
                .filter((f) => f.type === true)
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
                            .map((m, secondIndex) => {
                              return (
                                <div
                                  key={secondIndex}
                                  className="time"
                                  onClick={() =>
                                    check(
                                      m.id,
                                      accessToken,
                                      professionalId,
                                      // Number(userId),
                                      areas,
                                      name
                                    )
                                  }
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
          {show && <ModalComment />}
        </div>
      </Comments>
      <Line />
    </>
  );
};

export default ProfileProfessional;
