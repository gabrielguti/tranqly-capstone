import { ModalCommentStyle } from "./styles";
import { FaTimes } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useClientCard } from "../../providers/clientProvider";
import { UseAuth } from "../../providers/authProvider";
import { useState } from "react";

interface EditDataProps {
  name?: string;
  email?: string;
  password?: string;
}

interface UserEditModalData {
  userEdit: boolean;
  setUserEdit: any;
}

export default function UserEditModal({
  userEdit,
  setUserEdit,
}: UserEditModalData) {
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

  const { accessToken, user } = UseAuth();
  const { editUserFunction } = useClientCard();

  const Schema = yup.object().shape({
    name: yup.string().typeError("Apenas letras"),
    email: yup.string().email("Email Inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  function onSubmitFunction(data: EditDataProps) {
    const filteredData = {} as EditDataProps;

    if (data.email) {
      filteredData.email = data.email;
    }
    if (data.name) {
      filteredData.name = data.name;
    }
    if (password.length >= 4) {
      filteredData.password = password;
    }

    if (!passwordCheck) {
      if (password.length === 0 || password.length >= 4) {
        editUserFunction(accessToken, user.id, filteredData);
      } else {
        setPasswordCheck(true);
      }
    }
  }

  return (
    <ModalCommentStyle>
      <div>
        <FaTimes onClick={() => setUserEdit(!userEdit)} />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Nome" {...register("name")} />
          <span>{errors.name?.message}</span>
          <input placeholder="Email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length >= 4 || e.target.value.length === 0) {
                setPasswordCheck(false);
              }
            }}
          />
          <span>{passwordCheck && "Mínimo de 4 dígitos"}</span>
          <button type="submit">Editar</button>
        </form>
      </div>
    </ModalCommentStyle>
  );
}
