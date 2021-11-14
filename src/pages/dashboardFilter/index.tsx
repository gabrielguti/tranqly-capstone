import { useContext, useState } from 'react'
import CardProfessional from '../../components/cardProfessional'
import { ProfessionalContext } from '../../providers/professionals'
import Bar from '../../components/bar'
import { ContainerSearch, ContainerProfessionals } from './styles'
import { FaSearch } from 'react-icons/fa'

const DashboardFilter = () => {
    const { professionals, filterProfessional } =
        useContext(ProfessionalContext)
    const [value, setValue] = useState('')

    return (
        <>
            <Bar />
            <ContainerSearch>
                <p>Busque um profissional</p>
                <div className="input">
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <FaSearch
                        onClick={() => {
                            filterProfessional(value)
                            setValue('')
                        }}
                    />
                </div>
            </ContainerSearch>
            <ContainerProfessionals>
                {professionals
                    .sort(() => 0.5 - Math.random())
                    .map((professional, index) => {
                        return (
                            <CardProfessional
                                key={index}
                                professional={professional}
                                average={4}
                            />
                        )
                    })}
            </ContainerProfessionals>
        </>
    )
}
export default DashboardFilter
