import { createContext, ReactNode, useContext, useState } from "react";

import api from "../services/api";
// import { UseAuth } from "./authProvider";
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
  name: string;
  areas: string;
  ownerId: number;
}
interface ClientData {
  conference: DataProps[];
  getConference: (token: string, id: any) => void;
  cancelConference: (token: string, id: number, ownerId: number) => void;
}

const ClientCardContext = createContext<ClientData>({} as ClientData);

export const ClientCardProvider = ({ children }: ClientProps) => {
  const [conference, setConference] = useState([]);
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
      .then((_) => getConference(token, ownerId))
      .catch((err) => console.log(err));
  };

  return (
    <ClientCardContext.Provider
      value={{
        conference,
        getConference,
        cancelConference,
      }}
    >
      {children}
    </ClientCardContext.Provider>
  );
};

export const useClientCard = () => useContext(ClientCardContext);
