import Bar from "../../components/bar";
import {
  ContainerProfessionalData,
  CardsBox,
  SectionInfo,
  Title,
} from "./styles";
import DashboardCard from "../../components/dashboardCard";
import { Line } from "../../components/dashboardCard/styles";
import { useClientCard } from "../../providers/clientProvider";
import { useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { UseAuth } from "../../providers/authProvider";
import Button from "../../components/button";
import { useCalendar } from "../../providers/calendarProvider";
import ModalCommentPage from "../../components/modalCommentPage";
import Profile from "../../assets/img/profile.png";
import UserEditModal from "../../components/userEditModal";
import { MdOutlineFeedback } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const DashboardPatient = () => {
  const { conference, getConference } = useClientCard();
  const { user, accessToken } = UseAuth();
  const { show, setShow } = useCalendar();
  const { userEdit, setUserEdit } = useClientCard();
  let now = new Date();
  let ref: string[] = [];
  let refTwo: string[] = [];

  useEffect(() => {
    getConference(accessToken, user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formed = conference
    .slice()
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  const reverseFormed = conference
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1))
    .filter((item) => item.cancel === false);

  return (
    <>
      <Bar />
      <ContainerProfessionalData>
        <div className="ProfessionalData">
          <div className="img">
            {user.image ? (
              <img src={user.image} alt="imgProfile" />
            ) : (
              <img src={Profile} alt="imgProfile" />
            )}
          </div>
          <div className="data">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <Button onClick={() => setUserEdit(!userEdit)}>
              Editar usuário
            </Button>
            <div className="newComment">
              <p>Avalie nossa plataforma</p>
              <div className="icon">
                <MdOutlineFeedback
                  onClick={() => setShow(!show)}
                ></MdOutlineFeedback>
              </div>
            </div>
          </div>
        </div>
      </ContainerProfessionalData>
      <SectionInfo>
        <Title>
          <h2>Próximos agendamentos</h2>
        </Title>
        {reverseFormed.length > 0 ? (
          <>
            <CardsBox>
              {reverseFormed &&
                // eslint-disable-next-line array-callback-return
                reverseFormed.map((filtered, index) => {
                  if (
                    !ref.includes(filtered.date) &&
                    ref.push(filtered.date) &&
                    moment(now).format().replace(/\D/g, "") <=
                      moment(filtered.date).format().replace(/\D/g, "")
                  )
                    return (
                      <DashboardCard
                        isRemovable={filtered.cancel}
                        date={moment(filtered.date).format("LL")}
                        name={filtered.name}
                        time={moment(filtered.date).format("LT")}
                        key={index}
                        info={filtered.areas}
                        cancel={filtered.cancel}
                        token={accessToken}
                        id={filtered.id}
                        ownerId={Number(user.id)}
                        zoom={filtered.zoom}
                        passwordZoom={filtered.passwordZoom}
                      ></DashboardCard>
                    );
                })}
            </CardsBox>
          </>
        ) : (
          <div className="nothingHere">
            <FaRegClock />
            <h1>Você não possui horários agendados no momento</h1>
          </div>
        )}

        <Line />
        <Title>
          <h2>Últimos atendimentos</h2>
        </Title>
        {formed.length > 0 ? (
          <>
            <CardsBox>
              {formed &&
                // eslint-disable-next-line array-callback-return
                formed.map((item, index) => {
                  if (
                    !refTwo.includes(item.date) &&
                    refTwo.push(item.date) &&
                    moment(now).format().replace(/\D/g, "") >
                      moment(item.date).format().replace(/\D/g, "")
                  )
                    return (
                      <DashboardCard
                        date={moment(item.date).format("LL")}
                        name={item.name}
                        time={moment(item.date).format("LT")}
                        key={index}
                        info={item.areas}
                        isRemovable={true}
                        cancel={item.cancel}
                      />
                    );
                })}
            </CardsBox>
          </>
        ) : (
          <div className="nothingHere">
            <FaRegClock />
            <h1>Suas últimas consultas aparecerão aqui</h1>
          </div>
        )}

        <Line />
      </SectionInfo>
      {userEdit && (
        <UserEditModal userEdit={userEdit} setUserEdit={setUserEdit} />
      )}
      {show && <ModalCommentPage />}
    </>
  );
};

export default DashboardPatient;
