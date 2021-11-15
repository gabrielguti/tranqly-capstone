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
  areas: string;
  language: string;
  gender: string;
  price: number;
  state: string;
  crp: string;
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
  allProfessionals: IProfessionalData[];
  filterProfessional: (searchProfessional: string) => void;
  professionalComments: IProfessionalComments[];
  clients: IClientData[];
  qualifications: IQualificationData[];
  sProfess: IProfessionalData[];
  renderization: (nameProfessional: string, idProfessional: number) => void;
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
  const [sProfess, setSProfess] = useState<IProfessionalData[]>(
    [] as IProfessionalData[]
  );
  const [sProfessionals, setSProfessionals] = useState<IProfessionalData[]>(
    [] as IProfessionalData[]
  );
  const [allProfessionals, setAllProfessionals] = useState<IProfessionalData[]>(
    [] as IProfessionalData[]
  );
  const getProfessionals = useCallback(() => {
    api
      .get(`/users?type=professional`)
      .then((response) => {
        setProfessionals(response.data);
        setSProfessionals(response.data);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    getProfessionals();
  }, [getProfessionals]);
  const filterProfessional = (searchProfessional: string) => {
    if (
      searchProfessional === "" ||
      sProfessionals.filter(
        (professional) =>
          professional.name.toLocaleLowerCase().includes(searchProfessional) ||
          professional.profession
            .toLocaleLowerCase()
            .includes(searchProfessional)
      ).length === 0
    ) {
      getProfessionals();
    } else {
      setProfessionals(
        sProfessionals.filter(
          (professional) =>
            professional.name
              .toLocaleLowerCase()
              .includes(searchProfessional) ||
            professional.profession
              .toLocaleLowerCase()
              .includes(searchProfessional)
        )
      );
    }
  };
  const getProfessional = () => {
    api
      .get(`/users?type=professional`)
      .then((response) => {
        setAllProfessionals(response.data);
      })
      .catch((e) => console.log(e));
  };
  const getClients = () => {
    api.get(`/users?type=client`).then((response) => {
      setClients(response.data);
    });
  };
  const getComments = () => {
    api
      .get(`/comments`)
      .then((response) => {
        setProfessionalComments(response.data);
      })
      .catch((e) => console.log(e));
  };

  const renderization = (nameProfessional: string) => {
    const professionalStorage = sProfessionals.filter((professional) =>
      professional.name
        .toLocaleLowerCase()
        .includes(nameProfessional.split(" ")[0].toLocaleLowerCase())
    );
    localStorage.setItem("@tranqyl:prof", JSON.stringify(professionalStorage));
    const professionalInStorage = JSON.parse(
      localStorage.getItem("@tranqyl:prof") || ""
    );
    setSProfess(professionalInStorage);
  };
  useEffect(() => {
    getProfessional();
    getComments();
    getClients();
  }, []);
  return (
    <ProfessionalContext.Provider
      value={{
        getProfessional,
        professionals,
        professionalComments,
        clients,
        filterProfessional,
        qualifications,
        sProfess,
        renderization,
        allProfessionals,
      }}
    >
      {children}
    </ProfessionalContext.Provider>
  );
};

export const UseProfessionalContext = () => useContext(ProfessionalContext);
