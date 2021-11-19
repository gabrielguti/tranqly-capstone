import { createContext, ReactNode, useContext, useState } from "react";

import api from "../services/api";
import toast from "react-hot-toast";

interface ClientProps {
  children: ReactNode;
}
interface DataProps {
  id: number;
  userId: number;
  type: boolean;
  date: string;
  patientId?: number;
  cancel: boolean;
  namePatient?: string;
  nameProf?: string;
  areas: string;
  ownerId: number;
  zoom?: string;
  passwordZoom?: string;
}
interface ClientData {
  conference: DataProps[];
  getConference: (token: string, id: any) => void;
  cancelConference: (token: string, id: number, ownerId: number) => void;
  userEdit: boolean;
  setUserEdit: any;
  editUserFunction: (token: string, id: string, data: EditDataProps) => void;
}
interface EditDataProps {
  name?: string;
  email?: string;
  password?: string;
}

const ClientCardContext = createContext<ClientData>({} as ClientData);

export const ClientCardProvider = ({ children }: ClientProps) => {
  const [conference, setConference] = useState([]);
  const [userEdit, setUserEdit] = useState<boolean>(false);

  const user = JSON.parse(localStorage.getItem("@tranqyl:user") || "{}");

  const getConference = (token: string, id: any) => {
    api
      .get(`patient?patientId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setConference(response.data))
      .catch((err) => console.log(err));
  };

  const cancelConference = (token: string, id: number, ownerId: number) => {
    api
      .patch(
        `patient/${id}`,
        { cancel: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        getConference(token, ownerId);
        toast.success("Agendamento cancelado com sucesso");
      })
      .catch((e) => {
        toast.error("Erro ao cancelar o agendamento");
        console.log(e);
      });
  };

  const editUserFunction = (token: string, id: string, data: EditDataProps) => {
    api
      .patch(`users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        user.email = data.email || user.email;
        user.name = data.name || user.name;
        localStorage.setItem("@tranqyl:user", JSON.stringify(user));
        document.location.reload();
      });
  };

  return (
    <ClientCardContext.Provider
      value={{
        conference,
        getConference,
        cancelConference,
        userEdit,
        setUserEdit,
        editUserFunction,
      }}
    >
      {children}
    </ClientCardContext.Provider>
  );
};

export const useClientCard = () => useContext(ClientCardContext);
