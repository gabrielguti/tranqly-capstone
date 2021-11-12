import { MainContainer, FormContainer } from "./styles";
import Bar from "../../components/bar";
import ClientSingUpImg from "../../assets/img/IllustrationP16.svg";

const RegisterClient = () => {
  return (
    <MainContainer>
      <Bar />
      <FormContainer>
        <img src={ClientSingUpImg} alt={"ClientSingUpImg"} />
        <div className="FormDiv">
          <h1>Cadastrar</h1>
          <form>
            <input placeholder="Nome" />
            <input placeholder="Email" />
            <input placeholder="Senha" />
            <input placeholder="Confirme sua senha" />
            <button>Cadastrar</button>
          </form>
          <p>
            Já possui conta? <a href="/signin">Entre aqui</a>
          </p>
          <p>
            Cadastro para <a href="/signupprofessional">Profissionais</a>
          </p>
        </div>
      </FormContainer>
    </MainContainer>
  );
};

export default RegisterClient;
