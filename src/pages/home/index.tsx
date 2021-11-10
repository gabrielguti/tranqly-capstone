import LandingImg from "../../assets/img/illustrationO15.svg";

const Home = () => {
  return (
    <div>
      <div className="LargeHeader">
        <div className="InfoHeader">
          <h2 id="MainInfo">Um jeito diferente de mudar sua vida</h2>
          <p id="TextInfo">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <button id="MoreInfo">Saiba mais</button>
        </div>
        <div className="ImageHeader">
          <img src={LandingImg} alt="landingImg" />
        </div>
      </div>

      <section className="maininfo">
        <div className="mainTitle">Alguns profissionais</div>
        <div className="Carousel"></div>
        <div className="Ratings">
          <h2>Nossas avaliações</h2>
          <div className="ratingInfo"></div>
          <div className="ratingInfo"></div>
          <div className="ratingInfo"></div>
        </div>

        <div className="LastInfo">
          <h3> What is Lorem Ipsum?</h3>

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
            <h4>Anderson K.</h4>
            <span>Scrum Master</span>
          </div>
          <div className="CardTeam">
            <h4>Kaueh P.</h4>
            <span>Quality Assurance</span>
          </div>
          <div className="CardTeam">
            <h4>Natan W.</h4>
            <span>Quality Assurance</span>
          </div>
          <div className="CardTeam">
            <h4>Laudemir Jr.</h4>
            <span>Product Owner</span>
          </div>
          <div className="CardTeam">
            <h4>Gabriel G.</h4>
            <span>Tech Lead</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
