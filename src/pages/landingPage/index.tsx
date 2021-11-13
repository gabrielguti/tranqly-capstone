import {
  Scroll,
  Container,
  HeaderContainer,
  MainContainer,
  FooterContainer,
  Comments,
} from "./styles";
import landingImg from "../../assets/img/IllustrationO15.svg";
import Bar from "../../components/bar";
import Button from "../../components/button";
import Slider from "react-slick";
import { useContext, useState } from "react";
import {
  ProfessionalContext,
  UseProfessionalContext,
} from "../../providers/professionals";
import CardSlick from "../../components/cardSlick";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import CardKnowMore from "../../components/cardKnowMore";
import CardComments from "../../components/CardComments";

const LandingPage = () => {
  const { allProfessionals } = useContext(ProfessionalContext);
  const [show, setShow] = useState(false);
  const { professionalComments } = UseProfessionalContext();

  var settings = {
    speed: 200,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

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
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia.
            </p>
            <Button onClick={showCard}>Saiba mais</Button>
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
              .slice(0, 2)
              .map((item) => {
                return <CardSlick item={item} />;
              })}
          </Slider>
        </div>
      </Scroll>
      <div className="allComments">
        <h1>Nossas avaliações</h1>
        <Comments>
          {professionalComments
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((item) => {
              return <CardComments comments={item} />;
            })}
        </Comments>
      </div>
      <FooterContainer>
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
            <a href="" target="_blank" rel="noreferrer">
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
