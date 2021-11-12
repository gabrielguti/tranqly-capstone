import "swiper/swiper-bundle";
import { useContext } from "react";
import { ProfessionalContext } from "../../providers/professionals";
import Slider from "react-slick";
import { MainContainer } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComent from "../CardComent";
import StarsCount from "../starsCount";

const ProfessionalsSlider = () => {
  const { allProfessionals, professionalComments, clients, qualifications } =
    useContext(ProfessionalContext);

  for (let i = allProfessionals.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [allProfessionals[i], allProfessionals[rand]] = [
      allProfessionals[rand],
      allProfessionals[i],
    ];
  }

  let sum = 0;

  return (
    <Slider>
      {allProfessionals.map((elt, index) => {
        const { image, name, profession, areas, description, id } = elt;

        const filteredComments = professionalComments.filter((elt) => {
          return elt.destinyId === id;
        });

        const filteredQualifications =
          qualifications.filter((elt) => {
            return elt.destinyId === id;
          }) || [];

        filteredQualifications.forEach((elt) => {
          sum += elt.qualification;
        });

        const average = Math.round(sum / filteredQualifications.length) || 0;

        return (
          <MainContainer key={index}>
            <div className="ProfessionalInfo">
              <img src={image} alt={name} />

              <div>
                <h2>{name}</h2>
                <StarsCount stars={average} />
                <h4>{profession}</h4>
                <h4 className="areas">{areas.join(" | ")}</h4>
                <p>{description}</p>
              </div>
            </div>
            <div className="RatingsInfo">
              <h2>Nossas avaliações</h2>
              {filteredComments.map((elt, index) => {
                const { UserId, coment, note } = elt;

                const user = clients.filter((elt) => {
                  return elt.id === UserId;
                });

                return (
                  <div key={index}>
                    <CardComent
                      name={user[0]?.name}
                      comment={coment}
                      note={note}
                    />
                  </div>
                );
              })}
            </div>
          </MainContainer>
        );
      })}
    </Slider>
  );
};

export default ProfessionalsSlider;
