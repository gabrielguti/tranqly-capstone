import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";

interface ProfessionalProps {
  children: ReactNode;
}

interface IProfessionalComments {
  id: number;
  destinyId: number;
  note: number;
  coment: string;
  UserId: number;
}

interface IProfessionalData {
  id: number;
  name: string;
  image: string;
  type: string;
  profession: string;
  description: string;
  areas: string[];
}

interface IClientData {
  id: number;
  name: string;
  email: string;
  image: string;
  type: string;
}
interface IQualificationData {
  userId: number;
  destinyId: number;
  qualification: number;
  id: number;
}

interface IProfessional {
  getProfessional: () => void;
  professionals: IProfessionalData[];
  professionalComments: IProfessionalComments[];
  clients: IClientData[];
  qualifications: IQualificationData[];
}

export const ProfessionalContext = createContext<IProfessional>(
  {} as IProfessional
);

export const ProfessionalProvider = ({ children }: ProfessionalProps) => {
  const [professionals, setProfessionals] = useState<IProfessionalData[]>(
    [] as IProfessionalData[]
  );
  const [professionalComments, setProfessionalComments] = useState<
    IProfessionalComments[]
  >([] as IProfessionalComments[]);
  const [qualifications, setQualifications] = useState<IQualificationData[]>(
    [] as IQualificationData[]
  );

  const [clients, setClients] = useState<IClientData[]>([] as IClientData[]);

  const getProfessional = () => {
    api
      .get(`/users?type=professional`)
      .then((response) => setProfessionals(response.data))
      .catch((e) => console.log(e));
  };

  const getClients = () => {
    api.get(`/users?type=client`).then((response) => {
      setClients(response.data);
    });
  };

  const getComments = () => {
    api
      .get(`/coments`)
      .then((response) => {
        setProfessionalComments(response.data);
      })
      .catch((e) => console.log(e));
  };

  const getQualifications = () => {
    api
      .get(`/qualification`)
      .then((response) => {
        setQualifications(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProfessional();
    getComments();
    getClients();
    getQualifications();
  }, []);

  return (
    <ProfessionalContext.Provider
      value={{
        getProfessional,
        professionals,
        professionalComments,
        clients,
        qualifications,
      }}
    >
      {children}
    </ProfessionalContext.Provider>
  );
};
