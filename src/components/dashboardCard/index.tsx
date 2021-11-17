import { useClientCard } from "../../providers/clientProvider";
import Button from "../button";
import { BoxButton, CardPro, Date, Info, Time } from "./styles";

interface CardProps {
  date: string;
  time: string;
  name: string;
  info?: string;
  isRemovable: any;
  cancel: any;
  token?: any;
  id?: any;
  ownerId?: number;
}

const DashboardCard = ({
  date,
  time,
  name,
  info,
  isRemovable,
  cancel,
  token,
  id,
  ownerId,
}: CardProps) => {
  const { cancelConference } = useClientCard();

  return (
    <CardPro>
      <div>
        <Date>{date}</Date>
        <Time>{time}</Time>
        <Info>
          <h4>{name}</h4>
          <div>
            <span>{info}</span>
          </div>
          <div>
            <span id="cancel">{cancel && "Atendimento cancelado"}</span>
          </div>
        </Info>
      </div>
      {!isRemovable && (
        <BoxButton>
          <Button
            children={"Cancelar"}
            onClick={() => cancelConference(token, id, Number(ownerId))}
          />{" "}
        </BoxButton>
      )}
    </CardPro>
  );
};

export default DashboardCard;
