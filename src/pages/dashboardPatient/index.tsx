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

const DashboardPatient = () => {
  const { conference, getConference } = useClientCard();
  let now = new Date();
  let ref: string[] = [];
  let refTwo: string[] = [];
  const { user, accessToken } = UseAuth();

  useEffect(() => {
    getConference(accessToken, user.id);
  }, []);

  const formed = conference
    .slice()
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  const reverseFormed = conference
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

<<<<<<< HEAD
  const { show, setShow } = useCalendar();

=======
>>>>>>> 458b0516c0579be328729f70f74251c3dfd0a7ed
  return (
    <>
      <Bar />
      <ContainerProfessionalData>
        <div className="ProfessionalData">
          <div className="img">
            <img src={user.image} alt="imgProfile" />
          </div>
          <div className="data">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <Button onClick={() => setShow(!show)}>Feedback</Button>
          </div>
        </div>
      </ContainerProfessionalData>

      <SectionInfo>
        <Title>
          <h2>Próximos agendamentos</h2>
        </Title>
        <CardsBox>
          {reverseFormed &&
            reverseFormed
              .filter((item) => item.cancel === false)
              // eslint-disable-next-line array-callback-return
              .map((filtered) => {
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
                      info={filtered.areas}
                      cancel={filtered.cancel}
                      token={accessToken}
                      id={filtered.id}
                      ownerId={Number(user.id)}
                    ></DashboardCard>
                  );
              })}
        </CardsBox>
        <Line />
        <Title>
          <h2>Últimos atendimentos</h2>
        </Title>
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
        <Line />
      </SectionInfo>
      {show && <ModalCommentPage />}
    </>
  );
};

export default DashboardPatient;
