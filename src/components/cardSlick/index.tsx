import React from "react";
import { FaStar } from "react-icons/fa";
import { Card } from "./styles";

export default function CardSlick({ item }: any) {
  return (
    <Card>
      <div className="img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="infos">
        <div>
          <h2>{item.name}</h2>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
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
