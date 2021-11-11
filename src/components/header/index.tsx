import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";

export default function index() {
  return (
    <>
      <BarContainer>
        <div className="barWidth">
          <div>
            <img src={logo} alt="log" />
          </div>
        </div>
      </BarContainer>
    </>
  );
}
