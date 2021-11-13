import Bar from "../../components/bar";
import { BoxForm, Container, FooterForm, Title } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface SignUpProfessional {
  name: string;
  email: string;
  password: string;
  phone: string;
  gender?: string;
  profession: string;
  description: string;
  areas: [];
}

const RegisterProfessional = () => {
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
    profession: yup.string().required("Profissão Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  function onSubmitFunction(data: SignUpProfessional) {
    console.log(data);
  }

  return (
    <>
      <Bar />
      <Container>
        <Title>
          <h1>Cadastrar</h1>
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

            <input placeholder="Profissão" {...register("profession")} />
            <span>{errors.profession?.message}</span>
            <button>Cadastrar</button>
          </form>
        </BoxForm>
        <FooterForm>
          <p>
            Já possui conta? <a href="/signin">Entre aqui</a>
          </p>
          <p>
            Cadastro para <a href="/signupclient">Clientes</a>
          </p>
        </FooterForm>
      </Container>
    </>
  );
};

export default RegisterProfessional;
