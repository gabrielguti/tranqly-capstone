import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";
import { slide as Menu } from "react-burger-menu";
import Button from "../button";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <BarContainer>
        <div className="barWidth">
          <div>
            <Link to="/">
              <img src={logo} alt="log" />
            </Link>
          </div>
          <div className="burguer">
            <Menu right>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Link to="/signupprofessional">Para especialistas</Link>
              <Link to="/signupclient">Para clientes</Link>
              <Link to="/dashboardfilter">Procurar especialista</Link>
              <Link to="/signin">
                <Button>Logar</Button>
              </Link>
            </Menu>
          </div>
        </div>
      </BarContainer>
    </>
  );
}
