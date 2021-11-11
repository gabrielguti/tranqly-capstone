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
    professional: IProfessionalData[];
}

const ProfessionalContext = createContext<IProfessional>({} as IProfessional)

export const ProfessionalProvider=({children}:ProfessionalProps)=>{
    const [professional, setProfessional]=useState<IProfessionalData[]>([] as IProfessionalData[])
    const getProfessional=()=>{
        api.get(`//users?type=professional`)
        .then((response)=>console.log(response))
        .catch((e)=>console.log(e))
    }
    
    useEffect(()=>{
        getProfessional();
    },[getProfessional])

    return(
        <ProfessionalContext.Provider value={{getProfessional, professional}}>{children}</ProfessionalContext.Provider>
    )

}
