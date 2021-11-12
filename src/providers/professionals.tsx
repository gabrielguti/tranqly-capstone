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
    filterProfessional:(searchProfessional:string)=>void;
    sProfess: IProfessionalData[];
    renderization:(item:string)=>void;
}

export const ProfessionalContext = createContext<IProfessional>({} as IProfessional)

export const ProfessionalProvider=({children}:ProfessionalProps)=>{
    const [professionals, setProfessionals]=useState<IProfessionalData[]>([] as IProfessionalData[])
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
        professional.name.toLocaleLowerCase().includes(searchProfessional.split(" ")[0].toLocaleLowerCase()) || 
        professional.profession.toLocaleLowerCase().includes(searchProfessional.split(" ")[0].toLocaleLowerCase())
    )).length===0 ){
            getProfessionals();
        } else{
            setProfessionals(
                sProfessionals.filter((professional)=>
                professional.name.toLocaleLowerCase().includes(searchProfessional.split(" ")[0].toLocaleLowerCase()) || 
                professional.profession.toLocaleLowerCase().includes(searchProfessional.split(" ")[0].toLocaleLowerCase())
            ))
        }

    }

    const renderization=(item:string)=>{
        setSProfess(
            sProfessionals.filter((professional)=>
                professional.name.toLocaleLowerCase().includes(item.split(" ")[0].toLocaleLowerCase())
        ))
    }

    return(
        <ProfessionalContext.Provider value={{getProfessionals, professionals, filterProfessional, sProfess, renderization}}>{children}</ProfessionalContext.Provider>
    )

}
