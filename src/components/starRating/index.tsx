import { useState } from "react";
import { Container } from "./styles";

interface StarModal {
  setNewScore: (value: number) => void;
}

export const StarRating = ({ setNewScore }: StarModal) => {
  const [stars, setStars] = useState<number>(0);
  const [displayStar, setDisplayStar] = useState<number>(0);

  const enterHoverStar = (currentStar: number) => {
    setDisplayStar(currentStar);
  };
  const leaveHoverStar = () => {
    setDisplayStar(stars);
  };
  const changeRating = (currentStar: number) => {
    setStars(currentStar);
    setNewScore(currentStar);
  };

  return (
    <Container>
      <span
        className={displayStar >= 1 ? "fa fa-star checked" : "fa fa-star"}
        onPointerEnter={() => enterHoverStar(1)}
        onPointerLeave={() => leaveHoverStar()}
        onClick={() => changeRating(1)}
      ></span>
      <span
        className={displayStar >= 2 ? "fa fa-star checked" : "fa fa-star"}
        onPointerEnter={() => enterHoverStar(2)}
        onPointerLeave={() => leaveHoverStar()}
        onClick={() => changeRating(2)}
      ></span>
      <span
        className={displayStar >= 3 ? "fa fa-star checked" : "fa fa-star"}
        onPointerEnter={() => enterHoverStar(3)}
        onPointerLeave={() => leaveHoverStar()}
        onClick={() => changeRating(3)}
      ></span>
      <span
        className={displayStar >= 4 ? "fa fa-star checked" : "fa fa-star"}
        onPointerEnter={() => enterHoverStar(4)}
        onPointerLeave={() => leaveHoverStar()}
        onClick={() => changeRating(4)}
      ></span>
      <span
        className={displayStar === 5 ? "fa fa-star checked" : "fa fa-star"}
        onPointerEnter={() => enterHoverStar(5)}
        onPointerLeave={() => leaveHoverStar()}
        onClick={() => changeRating(5)}
      ></span>
    </Container>
  );
};
