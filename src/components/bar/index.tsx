import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";
import { slide as Menu } from "react-burger-menu";
import Button from "../button";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> e2fe27c800e0b98ecc793bfcfc5b4db3f167f19b
import { UseAuth } from "../../providers/authProvider";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Index = () => {
  const { accessToken } = UseAuth();

  const history = useHistory();
  const { signOut } = UseAuth();

  const changeLoginSignup = () => {
    if (accessToken) {
      signOut();
    } else {
      history.push("/signin");
    }
<<<<<<< HEAD
  };

  return (
    <>
=======
  }


  return (
>>>>>>> e2fe27c800e0b98ecc793bfcfc5b4db3f167f19b
      <BarContainer>
        <div className="barWidth">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
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
<<<<<<< HEAD
                <Button onClick={() => changeLoginSignup()}>
                  {accessToken ? "Deslogar" : "Logar"}
                </Button>
              </Link>
=======
                 <Button onClick={()=>changeLoginSignup()}>{accessToken?"Deslogar": "Logar"}</Button>
              </Link>              
>>>>>>> e2fe27c800e0b98ecc793bfcfc5b4db3f167f19b
            </Menu>
          </div>
        </div>
      </BarContainer>
  );
};
export default Index;
