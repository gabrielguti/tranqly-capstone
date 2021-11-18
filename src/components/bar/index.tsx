import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { UseAuth } from "../../providers/authProvider";
import { useHistory } from "react-router";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  const { accessToken, user } = UseAuth();

  const history = useHistory();
  const { signOut } = UseAuth();

  const changeLoginSignup = () => {
    if (accessToken) {
      signOut();
    } else {
      history.push("/signin");
    }
  };

  return (
    <BarContainer>
      <div className="barWidth">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="options">
          {accessToken && user.type === "client" ? (
            <Link to="/dashboardfilter">Procurar especialista</Link>
          ) : accessToken && user.type === "professional" ? (
            <></>
          ) : (
            <Link to="/signupclient">Para clientes</Link>
          )}
          {accessToken ? (
            <Link to={`/dashboard${user.type}`}>Dashboard</Link>
          ) : (
            <Link to="/signupprofessional">Para especialistas</Link>
          )}
          <Link to="/signin">
            <div className="icons" onClick={() => changeLoginSignup()}>
              {accessToken ? <FaSignOutAlt /> : <FaSignInAlt />}
            </div>
          </Link>
        </div>
        <div className="burguer">
          <Menu right>
            {accessToken ? (
              <Link to={`/`}>Dashboard</Link>
            ) : (
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            )}
            {!accessToken && (
              <Link to="/signupprofessional">Para especialistas</Link>
            )}
            {!accessToken && <Link to="/signupclient">Para clientes</Link>}
            {accessToken && user.type === "client" ? (
              <Link to="/dashboardfilter">Procurar especialista</Link>
            ) : accessToken && user.type === "professional" ? (
              <></>
            ) : (
              <Link to="/signupclient">Para clientes</Link>
            )}
            <Link to="/signin">
              <div className="icons" onClick={() => changeLoginSignup()}>
                {accessToken ? <FaSignOutAlt /> : <FaSignInAlt />}
              </div>
            </Link>
          </Menu>
        </div>
      </div>
    </BarContainer>
  );
};
export default Index;
