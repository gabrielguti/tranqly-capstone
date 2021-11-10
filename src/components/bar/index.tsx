import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";
import { FaBars } from "react-icons/fa";

export default function index() {
  return (
    <BarContainer>
      <div className="barWidth">
        <div>
          <img src={logo} alt="log" />
        </div>
        <div>
          <FaBars />
        </div>
      </div>
    </BarContainer>
  );
}
