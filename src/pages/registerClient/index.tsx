import Bar from "../../components/bar";
import { BoxForm, Container, FooterForm, Title } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseAuth } from "../../providers/authProvider";
import {Link} from 'react-router-dom';
interface ClientData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterClient = () => {
  const { signUp } = UseAuth();

  const Schema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().email("Email Inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(4, "4 dígitos no mínimo"),
    confirmPassword: yup
      .string()
      .required("Senhas Diferentes")
      .oneOf([yup.ref("password"), null], "Senhas Diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  function onSubmitFunction(data: ClientData) {
    signUp({
      name: data.name,
      email: data.email,
      password: data.password,
      type: "client",
    });
  }

  return (
    <>
      <Bar />
      <Container>
        <Title>
          <h1>Registre-se</h1>
        </Title>
        <BoxForm>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Nome" {...register("name")} />
            <span>{errors.name?.message}</span>
            <input placeholder="Email" {...register("email")} />
            <span>{errors.email?.message}</span>
            <input
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>

            <input
              placeholder="Confirme sua senha"
              type="password"
              {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>
            <button type="submit">Entrar</button>
          </form>
        </BoxForm>
        <FooterForm>
          Já possui conta? <Link to="/signIn">Entrar</Link>
        </FooterForm>
      </Container>
    </>
  );
};

export default RegisterClient;
