import {
  createContext,
  ReactNode,
  useCallback,
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
  areas:[];
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
  filterProfessional:(searchProfessional:string)=>void;
  professionalComments: IProfessionalComments[];
  clients: IClientData[];
  qualifications: IQualificationData[];
  sProfess: IProfessionalData[];
    renderization:(item:string)=>void;
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
  const [sProfessionals, setSProfessionals]=useState<IProfessionalData[]>([]as IProfessionalData[])
  const [sProfess, setSProfess]=useState<IProfessionalData[]>([]as IProfessionalData[])
    const getProfessionals=useCallback(()=>{
        api.get(`/users?type=professional`)
        .then((response)=>{setProfessionals(response.data); setSProfessionals(response.data)})
        .catch((e)=>console.log(e))
    },[])
    
    useEffect(()=>{
        getProfessionals();
    },[getProfessionals])

    const filterProfessional=(searchProfessional:string)=>{
        if(searchProfessional===""|| (sProfessionals.filter((professional)=>
        professional.name.toLocaleLowerCase().includes(searchProfessional) || 
        professional.profession.toLocaleLowerCase().includes(searchProfessional)
    )).length===0 ){
            getProfessionals();
        } else{
            setProfessionals(
                sProfessionals.filter((professional)=>
                professional.name.toLocaleLowerCase().includes(searchProfessional) || 
                professional.profession.toLocaleLowerCase().includes(searchProfessional)
            ))
        }

    }

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

  const renderization=(item:string)=>{
        
    const professionalStorage = sProfessionals.filter((professional)=>
    professional.name.toLocaleLowerCase().includes(item.split(" ")[0].toLocaleLowerCase()))
    localStorage.setItem("@tranqly:prof", JSON.stringify(professionalStorage))
    const professionalInStorage = JSON.parse(localStorage.getItem("@tranqly:prof")||"")

      setSProfess(professionalInStorage)
}

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
        filterProfessional,
        qualifications, 
        sProfess, 
        renderization
      }}
    >
      {children}
    </ProfessionalContext.Provider>
  );
};
