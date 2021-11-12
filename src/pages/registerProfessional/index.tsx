import { MainContainer, FormContainer } from "./styles";
import Bar from "../../components/bar";
import ClientSingUpImg from "../../assets/img/IllustrationS19.svg";
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
    phone: yup
      .string()
      .required("Telefone Obrigatório")
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
        "Número de telefone inválido"
      ),
    gender: yup.string(),
    profession: yup.string().required("Profissão Obrigatória"),
    areas: yup.string().required("Ao menos 1 Especialidade"),
    description: yup.string().required("Descrição Própria Obrigatória"),
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
              <input placeholder="Senha" {...register("password")} />
              {errors.password?.message}
            </div>
            <div>
              <input placeholder="Telefone" {...register("phone")} />
              {errors.phone?.message}
            </div>
            <div className="SubInputDiv">
              <div>
                <input placeholder="Gênero" {...register("gender")} />
              </div>
              <div>
                <input placeholder="Profissão" {...register("profession")} />
                {errors.profession?.message}
              </div>
            </div>
            <div>
              <input placeholder="Especialidades" {...register("areas")} />
              {errors.areas?.message}
            </div>
            <div>
              <input placeholder="Descrição" {...register("description")} />
              {errors.description?.message}
            </div>
            <button type="submit">Cadastrar</button>
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
