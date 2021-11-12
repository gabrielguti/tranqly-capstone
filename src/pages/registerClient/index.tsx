import { MainContainer, FormContainer } from "./styles";
import Bar from "../../components/bar";
import ClientSingUpImg from "../../assets/img/IllustrationP16.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseAuth } from "../../providers/authProvider";

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
    <MainContainer>
      <Bar />
      <FormContainer>
        <img src={ClientSingUpImg} alt={"ClientSingUpImg"} />
        <div className="FormDiv">
          <h1>Cadastrar</h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <div>
              <input placeholder="Nome" {...register("name")} />
              {errors.name?.message}
            </div>
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
            <div>
              <input
                placeholder="Confirme sua senha"
                type="password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword?.message}
            </div>
            <button type="submit">Cadastrar</button>
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
