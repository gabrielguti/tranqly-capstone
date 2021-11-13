import { BarContainer } from "./styles";
import logo from "../../assets/img/tranqyl.svg";
import { slide as Menu } from "react-burger-menu";
import Button from "../button";
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


    <>
      <BarContainer>
        <div className="barWidth">
          <div>
            <img src={logo} alt="log" />
          </div>
          <div className="burguer">
            <Menu right>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
              <a href="/signupprofessional">Para especialistas</a>
              <a href="/signupclient">Para clientes</a>
              <a href="/dashboardfilter">Procurar especialista</a>
              
                <Button onClick={()=>changeLoginSignup()}>{accessToken?"Deslogar": "Logar"}</Button>
              
            </Menu>
          </div>
        </div>
      </BarContainer>
    </>
  );
}
export default Index