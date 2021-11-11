import { useContext, useState } from "react"
import CardProfessional from "../../components/cardProfessional"
import { ProfessionalContext } from "../../providers/professionals"
import Bar from "../../components/bar"
import { ContainerSearch, Input, P } from "./styles"
import {FaSearch}from "react-icons/fa"

const DashboardFilter =()=>{

    const {professionals, filterProfessional}=useContext(ProfessionalContext)
    const[value,setValue]=useState("")

    return(
        <>
        <Bar/>
        <ContainerSearch>
            <P>Busque um profissional</P>
            <Input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>{filterProfessional(value); setValue("")}}><FaSearch/></button>
        </ContainerSearch>
        
            {professionals.map((professional, index)=>{
                return <CardProfessional key={index} professional={professional}/>
            })}

        </>
    )
}
export default DashboardFilter