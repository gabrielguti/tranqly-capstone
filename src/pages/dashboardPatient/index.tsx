import { FaStar } from "react-icons/fa";
import Bar from "../../components/bar";
import { ContainerProfessionalData } from "../profileProfessional/styles";
import profile from "../../assets/img/profile.png";
import Button from "../../components/button";
import { CardsBox, ContaiinerProfileInfo, SectionInfo, Title } from "./styles";
import DashboardCard from "../../components/dashboardCard";
import { Line } from "../../components/dashboardCard/styles";
import { useClientCard } from "../../providers/clientProvider";
import { useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";

const DashboardPatient = () => {
  const { conference, getConference } = useClientCard();
  let now = new Date();
  let ref: string[] = [];
  let refTwo: string[] = [];

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhYnJpZWxAZ21haWwuY29tIiwiaWF0IjoxNjM2OTI0MDk0LCJleHAiOjE2MzY5Mjc2OTQsInN1YiI6IjE1In0.0ciyaG0ChIn_mOtAFi9xLEGNJoRnpUNssnoUHC61Mo8";

  useEffect(() => {
    getConference(token);
  }, []);

  const formed = conference
    .slice()
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  console.log(formed);

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
          <ContaiinerProfileInfo>
            <h3>frederico@mail.com</h3>

            <Button>Alterar senha</Button>
          </ContaiinerProfileInfo>
        </div>
      </ContainerProfessionalData>

      <SectionInfo>
        <Title>
          <h2>Próximos agendamentos</h2>
        </Title>
        <CardsBox>
          {conference &&
            conference
              .filter((item) => item.cancel === false)
              .map((filtered, index) => {
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
                      name={filtered.nameProfessional}
                      time={moment(filtered.date).format("LT")}
                      info={"info"}
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
                    name={item.nameProfessional}
                    time={moment(item.date).format("LT")}
                    key={index}
                    info={"info"}
                    isRemovable={true}
                  />
                );
            })}
        </CardsBox>
        <Line />
      </SectionInfo>
    </>
  );
};

export default DashboardPatient;
