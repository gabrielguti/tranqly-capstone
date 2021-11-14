import { FaStar } from "react-icons/fa";
import Button from "../button";
import { BoxButton, CardPro, Date, Info, Time } from "./styles";

interface CardProps {
  date: string;
  time: string;
  name: string;
  info?: string;
  isRemovable: any;
}

const DashboardCard = ({ date, time, name, info, isRemovable }: CardProps) => {
  return (
    <CardPro>
      <Date>{date}</Date>
      <Time>{time}</Time>
      <Info>
        <h4>{name}</h4>

        <div>
          <span>{info}</span>
        </div>

        {!isRemovable && (
          <BoxButton>
            {" "}
            <Button children={"Cancelar"} />{" "}
          </BoxButton>
        )}
      </Info>
    </CardPro>
  );
};

export default DashboardCard;
