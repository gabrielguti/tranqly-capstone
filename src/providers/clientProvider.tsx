import { createContext, ReactNode, useContext, useState } from "react";

import api from "../services/api";
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
  areas: string
}
interface ClientData {
  conference: DataProps[];
  getConference: (token: string, id: any) => void;
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

  return (
    <ClientCardContext.Provider
      value={{
        conference,
        getConference,
      }}
    >
      {children}
    </ClientCardContext.Provider>
  );
};

export const useClientCard = () => useContext(ClientCardContext);
