import { MainContainer, HeaderContainer, MainInfoContainer } from "./styles";
import landingImg from "../../assets/img/IllustrationO15.svg";
import ProfileImg from "../../assets/img/profile.png";
import Header from "../../components/header";

const LandingPage = () => {
  return (
    <MainContainer>
      <Header />
      <HeaderContainer>
        <div className="InfoHeader">
          <h1 id="MainInfo">Um jeito diferente de mudar sua vida</h1>
          <p id="TextInfo">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <button id="MoreInfo">Saiba mais</button>
        </div>
        <img src={landingImg} alt="landingImg" />
      </HeaderContainer>

      <MainInfoContainer>
        <h2 className="mainTitle">Alguns profissionais</h2>

        <div className="Carousel"></div>

        <div className="RatingDiv">
          <h2>Nossas avaliações</h2>
          <div className="Ratings">
            <div className="ratingInfo"></div>
            <div className="ratingInfo"></div>
            <div className="ratingInfo"></div>
          </div>
        </div>

        <div className="LastInfo">
          <h2> What is Lorem Ipsum?</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <footer className="CreatorsInfo">
          <div className="CardTeam">
            <img src={ProfileImg} alt={"profile"} />
            <h4>Anderson K.</h4>
            <span>Scrum Master</span>
          </div>
          <div className="CardTeam">
            <img src={ProfileImg} alt={"profile"} />
            <h4>Kaueh P.</h4>
            <span>Quality Assurance</span>
          </div>
          <div className="CardTeam">
            <img src={ProfileImg} alt={"profile"} />
            <h4>Natan W.</h4>
            <span>Quality Assurance</span>
          </div>
          <div className="CardTeam">
            <img src={ProfileImg} alt={"profile"} />
            <h4>Laudemir Jr.</h4>
            <span>Product Owner</span>
          </div>
          <div className="CardTeam">
            <img src={ProfileImg} alt={"profile"} />
            <h4>Gabriel G.</h4>
            <span>Tech Lead</span>
          </div>
        </footer>
      </MainInfoContainer>
    </MainContainer>
  );
};

export default LandingPage;
