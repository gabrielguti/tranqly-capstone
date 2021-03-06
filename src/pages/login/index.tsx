import Bar from "../../components/bar";
import { BoxForm, Container, ContainerImage, ContainerForm } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseAuth } from "../../providers/authProvider";
import { Link } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = UseAuth();

  const Schema = yup.object().shape({
    email: yup.string().email("email inválido").required("email obrigatório"),
    password: yup
      .string()
      .required("senha obrigatória")
      .min(4, "Mínimo de 4 dígitos"),
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
    <>
      <Bar />
      <Container>
        <ContainerImage></ContainerImage>
        <ContainerForm>
          <BoxForm>
            <h1>Entrar</h1>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <input placeholder="Email" {...register("email")} />
              <span>{errors.email?.message}</span>
              <input
                placeholder="Senha"
                type="password"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <button type="submit">Entrar</button>
            </form>
            <p>
              Não possui conta? <Link to="/signupclient">Cadastre-se</Link>
            </p>
          </BoxForm>
        </ContainerForm>
      </Container>
    </>
  );
};

export default Login;
