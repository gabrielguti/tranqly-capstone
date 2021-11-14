import Bar from "../../components/bar";
import { BoxForm, Container, ContainerForm, ContainerImage } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
interface SignUpProfessional {
  name: string;
  email: string;
  password: string;
  gender: string;
  profession: string;
  areas: string;
  description: string;
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
    gender: yup.string().required("Gênero obrigatório"),
    profession: yup.string().required("Profissão Obrigatória"),
    areas: yup.string().required("Especialidade obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
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
        <ContainerForm>
          <BoxForm>
            <h1>
              <h1>Cadastrar</h1>
            </h1>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <input placeholder="Nome completo" {...register("name")} />
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
              <div className="containerInput">
                <div className="input">
                  <select placeholder="Gênero" {...register("gender")}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Não binário">Não binário</option>
                  </select>
                  <span>{errors.gender?.message}</span>
                </div>
                <div className="input">
                  <select placeholder="Profissão" {...register("profession")}>
                    <option value="Psicólogo">Psicólogo</option>
                    <option value="Psicanalista">Psicanalista</option>
                    <option value="Terapeuta">Terapeuta</option>
                    <option value="Coach">Coach</option>
                  </select>
                  <span>{errors.profession?.message}</span>
                </div>
              </div>
              <input placeholder="Especialidade" {...register("areas")} />
              <span>{errors.areas?.message}</span>
              <textarea
                placeholder="Descrição"
                {...register("description")}
              ></textarea>
              <span>{errors.description?.message}</span>
              <button>Cadastrar</button>
            </form>
            <div>
              <p>
            Já possui conta? <Link to="/signin">Entre aqui</Link>
              </p>
              <p>
            Cadastro para <Link to="/signupclient">Clientes</Link>
              </p>
            </div>
          </BoxForm>
        </ContainerForm>
        <ContainerImage></ContainerImage>
      </Container>
    </>
  );
};

export default RegisterProfessional;
