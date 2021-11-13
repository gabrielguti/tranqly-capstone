import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";
import { slide as Menu } from "react-burger-menu";
import Button from "../button";
import { Link } from "react-router-dom";
import { UseAuth } from "../../providers/authProvider";
import { useHistory } from "react-router";


const Index=()=> {
  const{accessToken}=UseAuth()

  const history = useHistory()
  const {signOut}=UseAuth()

  const changeLoginSignup=()=>{
    if(accessToken){
     signOut()
    }else{
      history.push("/signin")
    }
  }


  return (
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
                 <Button onClick={()=>changeLoginSignup()}>{accessToken?"Deslogar": "Logar"}</Button>
              </Link>              
            </Menu>
          </div>
        </div>
      </BarContainer>
  );
}
export default Index