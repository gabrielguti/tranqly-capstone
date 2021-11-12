import { MainContainer, FormContainer } from "./styles";
import Bar from "../../components/bar";
import LoginImg from "../../assets/img/IllustrationR18.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseAuth } from "../../providers/authProvider";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = UseAuth();

  const Schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(4, "4 dígitos no mínimo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  function onSubmitFunction(data: LoginData) {
    signIn(data);
  }

  return (
    <MainContainer>
      <Bar />
      <FormContainer>
        <img src={LoginImg} alt={"LoginImg"} />
        <div className="FormDiv">
          <h1>Entrar</h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <div>
              <input placeholder="Email" {...register("email")} />
              {errors.email?.message}
            </div>
            <div>
              <input
                placeholder="Senha"
                type="password"
                {...register("password")}
              />
              {errors.password?.message}
            </div>
            <button type="submit">Entrar</button>
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
