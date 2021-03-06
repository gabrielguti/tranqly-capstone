import React, { useEffect, useState } from "react";
import api from "../../services/api";
import StarsCount from "../contStars";
import { Card } from "./styles";
import AltImg from "../../assets/img/profile.png";


export default function CardSlick({item}:any) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api
      .get(
        `https://tranqly.herokuapp.com/comments?professionalId=${item.id}`
      )
      .then((response) => setComments(response.data))
      .catch((e) => console.log(e));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let media =
    comments.length > 0 &&
    Math.round(
      comments.reduce(
        (total:number, atual: { score: number }) => total + atual.score,
        0
      ) / comments.length
    );
  if (media === false) {
    media = 0;
  }

  return (
    <Card>
      <div className="img">
        <img src={item.image || AltImg} alt={item.name} />
      </div>
      <div className="infos">
        <div>
          <h2>{item.name}</h2>
          <StarsCount stars={media} />
          <p>{item.profession}</p>
          <p>{item.areas}</p>
        </div>
        <div>
          <span>{item.description}</span>
        </div>
      </div>
    </Card>
  );
}
