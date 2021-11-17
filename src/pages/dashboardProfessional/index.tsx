import moment from "moment";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import Bar from "../../components/bar";
import CardProfessionalData from "../../components/cardProfessionalData";
import { ProfessionalModal } from "../../components/professionalModal";
import { UseAuth } from "../../providers/authProvider";
import { useCalendar } from "../../providers/calendarProvider";
import { Calendar, ContainerProfessionalData } from "./styles";

const DashboardProfessional = () => {
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

  const [showModal, setShowModal] = useState<boolean>(true);
  const [modalType, setModalType] = useState<string>("event");

  const { accessToken, user } = UseAuth();
  const getProfessionalStorage = JSON.parse(
    localStorage.getItem("@tranqyl:user") || ""
  );

  let ref: string[] = [];
  let now = new Date();

  useEffect(() => {
    searchDate(Number(getProfessionalStorage.id), accessToken);
    searchComments(Number(getProfessionalStorage.id), accessToken);
    console.log(calendar);
  }, []);
  console.log(calendar);
  const formed = calendar
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  const activateModal = (type: string) => {
    setShowModal(!showModal);
    setModalType(type);
  };

  return (
    <>
      <Bar />
      <ContainerProfessionalData>
        <CardProfessionalData professional={getProfessionalStorage} />
      </ContainerProfessionalData>

      <Calendar>
        <div className="tittle">
          <p>Minha agenda</p>
          <button
            className="newAval"
            onClick={() => activateModal("availability")}
          >
            +
          </button>
        </div>
        <div className="container">
          {formed.length > 0 ? (
            <>
              {formed.map((item, index) => {
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
                                onClick={() => activateModal("event")}
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
      {showModal && (
        <ProfessionalModal
          activateModal={activateModal}
          modalType={modalType}
        />
      )}
    </>
  );
};
export default DashboardProfessional;
