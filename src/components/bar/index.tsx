import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";
import { FaBars } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import Button from "../button";

export default function index() {
  return (
    <>
      <BarContainer>
        <div className="barWidth">
          <div>
            <img src={logo} alt="log" />
          </div>
          <div className="burguer">
            <FaBars />
            <Menu right>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
              <a href="/signupprofessional">Para especialistas</a>
              <a href="/signupclient">Para clientes</a>
              <a href="/signin">
                <Button>Logar</Button>
              </a>
            </Menu>
          </div>
        </div>
      </BarContainer>
    </>
  );
}
