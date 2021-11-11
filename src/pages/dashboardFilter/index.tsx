import { useContext } from "react"
import CardProfessional from "../../components/cardProfessional"
import { ProfessionalContext } from "../../providers/professionals"
import Bar from "../../components/bar"
import { ContainerSearch, Input, P } from "./styles"
import {FaSearch}from "react-icons/fa"

const DashboardFilter =()=>{

    const {professionals}=useContext(ProfessionalContext)

    return(
        <>
        <Bar/>
        <ContainerSearch>
            <P>Busque um profissional</P>
            <Input/>
            <FaSearch/>
        </ContainerSearch>
        
            {professionals.map((professional, index)=>{
                return <CardProfessional key={index} professional={professional}/>
            })}

        </>
    )
}
export default DashboardFilter