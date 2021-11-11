import { MainContainer, FormContainer } from "./styles";
import Header from "../../components/header";
import ClientSingUpImg from "../../assets/img/IllustrationS19.svg";

const RegisterProfessional = () => {
  return (
    <MainContainer>
      <Header />
      <FormContainer>
        <img src={ClientSingUpImg} alt={"ClientSingUpImg"} />
        <div className="FormDiv">
          <h1>Cadastrar</h1>
          <form>
            <input placeholder="Nome" />
            <input placeholder="Email" />
            <input placeholder="Senha" />
            <input placeholder="Telefone" />
            <div className="SubInputDiv">
              <input placeholder="Gênero" />
              <input placeholder="Especialidade" />
            </div>
            <input placeholder="Experiência" />
            <button>Cadastrar</button>
          </form>
          <p>
            Já possui conta? <a href="/signin">Entre aqui</a>
          </p>
          <p>
            Cadastro para <a href="/signupclient">Clientes</a>
          </p>
        </div>
      </FormContainer>
    </MainContainer>
  );
};

export default RegisterProfessional;
