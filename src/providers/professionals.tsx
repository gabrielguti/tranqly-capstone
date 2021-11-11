import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react"
import api from "../services/api"

interface ProfessionalProps{
    children:ReactNode;
}

interface IProfessionalData{
    id:number;
    name:string;
    image:string;
    type:string;
    profession:string;
    description:string;
}

interface IProfessional{
    getProfessional: ()=>void;
    professionals: IProfessionalData[];
}

export const ProfessionalContext = createContext<IProfessional>({} as IProfessional)

export const ProfessionalProvider=({children}:ProfessionalProps)=>{
    const [professionals, setProfessionals]=useState<IProfessionalData[]>([] as IProfessionalData[])
    const getProfessional=()=>{
        api.get(`/users?type=professional`)
        .then((response)=>setProfessionals(response.data))
        .catch((e)=>console.log(e))
    }
    
    useEffect(()=>{
        getProfessional();
    },[getProfessional])

    return(
        <ProfessionalContext.Provider value={{getProfessional, professionals}}>{children}</ProfessionalContext.Provider>
    )

}
