import { MainContainer, FormContainer } from "./styles";
import Header from "../../components/header";
import LoginImg from "../../assets/img/IllustrationR18.svg";

const Login = () => {
  return (
    <MainContainer>
      <Header />
      <FormContainer>
        <img src={LoginImg} alt={"LoginImg"} />
        <div className="FormDiv">
          <h1>Entrar</h1>
          <form>
            <input placeholder="Email" />
            <input placeholder="Senha" />
            <button>Entrar</button>
          </form>
          <p>
            Não possui conta? <a href="/signupclient">Cadastre-se</a>
          </p>
        </div>
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
