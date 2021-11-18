import {
  Scroll,
  Container,
  HeaderContainer,
  MainContainer,
  FooterContainer,
  Comments,
  Text,
} from "./styles";
import landingImg from "../../assets/img/IllustrationO15.svg";
import Bar from "../../components/bar";
import Button from "../../components/button";
import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import { ProfessionalContext } from "../../providers/professionals";
import CardSlick from "../../components/cardSlick";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import CardKnowMore from "../../components/cardKnowMore";
import CardComments from "../../components/CardComments";
import { useCalendar } from "../../providers/calendarProvider";
import { Line } from "../../components/dashboardCard/styles";
import Lottie from "react-lottie";
import animationData from "../../assets/img/lf30_editor_vipqfut6.json";
import animationDataTwo from "../../assets/img/lf30_editor_4tsm6nna.json";
import animationDataThree from "../../assets/img/lf30_editor_pwgh8ycu.json";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  const { allProfessionals } = useContext(ProfessionalContext);
  const [show, setShow] = useState(false);
  const { getCommentPage, commentsPage } = useCalendar();
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });
  useEffect(() => {
    Aos.init({});
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsThree = {
    loop: true,
    autoplay: true,
    animationData: animationDataThree,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let settings = {
    speed: 200,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  useEffect(() => {
    getCommentPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showCard = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Bar />
      <HeaderContainer>
        <div className="header">
          <div className="info">
            <h1>Um jeito diferente de mudar sua vida</h1>
            <p>
              Uma aplicação que visa o bem estar emocional e comportamental dos
              usuários. Valorizando o atendimento remoto de maneira objetiva e
              segura. .
            </p>
            <Button onClick={() => setShow(!show)}>Saiba mais</Button>
          </div>
          <div className="img">
            <img src={landingImg} alt="landingImg" />
          </div>
        </div>
      </HeaderContainer>
      <MainContainer>
        <h1>Alguns Profissionais</h1>
      </MainContainer>
      <Scroll>
        <div className="containerSlick">
          <Slider {...settings}>
            {allProfessionals
              .sort(() => 0.5 - Math.random())
              .slice(0, 5)
              .map((item, index) => {
                return <CardSlick key={index} item={item} />;
              })}
          </Slider>
        </div>
      </Scroll>
      <div className="allComments">
        <h1>Nossas avaliações</h1>
        <Comments>
          {commentsPage
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((item: any, index: number) => {
              return <CardComments key={index} comments={item} />;
            })}
        </Comments>
      </div>
      <Line />
      <Text data-aos="fade-left" data-aos-duration="1000" className="boxes">
        <div>
          <h1>Atendimento remoto no contexto da Pandemia</h1>
          <p>
            Diante da sociedade conteporânea e o avanço das tecnologias de
            informação, novas formas de comunicação e de relações surgem, dando
            espaço para atendimentos online em diversos âmbitos, incluindo o
            tratamento psicoterápico. Desse modo, o atendimento online pode ser
            considerado um avanço que acompanha a demanda da vida moderna. Sendo
            assim, um meio que permite o acesso de diversos profissionais de
            diferentes áreas com os mesmos benefícios do atendimento presencial.
            .
          </p>
        </div>

        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          speed={1}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </Text>
      <Text data-aos="fade-right" data-aos-duration="1000" className="boxes">
        <Lottie
          options={defaultOptionsTwo}
          height={350}
          width={350}
          speed={1}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
        <div id="secoundBox">
          <h1>Aumento na procura de atendimentos psicológicos</h1>
          <p>
            De acordo com a pesquisa realizada pelo website <b>CostaNorte</b>,
            entre março e setembro de 2020, período que corresponde aos seis
            primeiros meses da pandemia, houve um aumento de <span>32%</span>{" "}
            nos atendimentos psicológicos online.
          </p>
        </div>
      </Text>
      <Text data-aos="fade-left" data-aos-duration="1000" className="boxes">
        <div>
          <h1>Benefícios do atendimento online</h1>
          <ul>
            <li>É ideal no período de quarentena;</li>
            <li>Horários mais flexíveis para os respectivos agendamentos;</li>
            <li>Oferece mais praticidade e dinamismo;</li>
            <li>Pode ser feita de forma individual, em casal ou em grupo;</li>
            <li>Mais liberdade na conversa;</li>
          </ul>
        </div>

        <Lottie
          options={defaultOptionsThree}
          height={200}
          width={200}
          speed={1}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </Text>
      <Line />
      <FooterContainer data-aos="fade-down" data-aos-duration="800">
        <h1>Desenvolvedores</h1>
        <div className="containerProfile">
          <div className="profile">
            <img
              src="https://ca.slack-edge.com/TQZR39SET-U021MHSRNHK-988a68fd0871-512"
              alt="photoAnderson"
            />
            <p>Scrum Master</p>
            <h1>Anderson K.</h1>
            <a
              href="https://www.linkedin.com/in/anderson-klaito/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/andersonklaiton"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
          <div className="profile">
            <img
              src="https://ca.slack-edge.com/TQZR39SET-U01U1DX1JEN-a518010d0af7-512"
              alt="photoKaueh"
            />
            <p>Quality Assurance</p>
            <h1>Kaueh P.</h1>
            <a href="/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Kurein"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
          <div className="profile">
            <img
              src="https://ca.slack-edge.com/TQZR39SET-U020WPS8BUY-563d1242a777-512"
              alt="photoNatan"
            />
            <p>Quality Assurance</p>
            <h1>Natan W.</h1>
            <a
              href="https://www.linkedin.com/in/natanws/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/natanws"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
          <div className="profile">
            <img
              src="https://ca.slack-edge.com/TQZR39SET-U022091F97Z-dce4a65b567f-512"
              alt="photoLaudemir"
            />
            <p>Product Owner</p>
            <h1>Laudemir Jr.</h1>
            <a
              href="https://www.linkedin.com/in/nlaudemir/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/laudemirjunior"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
          <div className="profile">
            <img
              src="https://ca.slack-edge.com/TQZR39SET-U01SH3TBYLC-7569a94f34d6-512"
              alt="photoGabriel"
            />
            <p>Tech Leader</p>
            <h1>Gabriel G.</h1>
            <a
              href="https://www.linkedin.com/in/gabriel-gutierrez-b85996210/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gabrielguti"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </FooterContainer>
      {show && <CardKnowMore showCard={showCard} />}
    </Container>
  );
};

export default LandingPage;
