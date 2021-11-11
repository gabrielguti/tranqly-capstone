import {createContext, ReactNode, useCallback, useEffect, useState} from "react"
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
    areas:[]
}

interface IProfessional{
    getProfessionals: ()=>void;
    professionals: IProfessionalData[];
}

export const ProfessionalContext = createContext<IProfessional>({} as IProfessional)

export const ProfessionalProvider=({children}:ProfessionalProps)=>{
    const [professionals, setProfessionals]=useState<IProfessionalData[]>([] as IProfessionalData[])
    const getProfessionals=useCallback(()=>{
        api.get(`/users?type=professional`)
        .then((response)=>setProfessionals(response.data))
        .catch((e)=>console.log(e))
    },[])
    
    useEffect(()=>{
        getProfessionals();
    },[getProfessionals])

    return(
        <ProfessionalContext.Provider value={{getProfessionals, professionals}}>{children}</ProfessionalContext.Provider>
    )

}
