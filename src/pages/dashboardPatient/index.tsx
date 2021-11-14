import { FaStar } from 'react-icons/fa'
import Bar from '../../components/bar'
import { ContainerProfessionalData } from '../profileProfessional/styles'
import profile from '../../assets/img/profile.png'
import Button from '../../components/button'
import { CardsBox, ContaiinerProfileInfo, SectionInfo, Title } from './styles'
import DashboardCard from '../../components/dashboardCard'
import { Line } from '../../components/dashboardCard/styles'

const DashboardPatient = () => {
    return (
        <>
            <Bar />
            <ContainerProfessionalData>
                <div className="ProfessionalData">
                    <div className="img">
                        <img src={profile} alt="imgProfile" />
                    </div>
                    <div className="data">
                        <div>
                            <h2>FREDERICO MASOMENO</h2>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div>
                            <p>Psicologo</p>
                            <p>Traumas | TEPT | Relacionamentos</p>
                        </div>
                        <div>
                            <p>
                                Psicologo formado na Faculdade Imaginária de
                                Natanlandia com especialização em traumas e
                                relacionamentos. Com experiência em muitos
                                lugares loucos mano. Dattebayo.
                            </p>
                        </div>
                    </div>
                    <ContaiinerProfileInfo>
                        <h3>frederico@mail.com</h3>

                        <Button>Alterar senha</Button>
                    </ContaiinerProfileInfo>
                </div>
            </ContainerProfessionalData>

            <SectionInfo>
                <Title>
                    <h2>Próximos agendamentos</h2>
                </Title>
                <CardsBox>
                    <DashboardCard
                        isRemovable={true}
                        date={'data'}
                        name={'nome'}
                        time={'horário'}
                        info={'Info'}
                    />
                    <DashboardCard
                        isRemovable={true}
                        date={'data'}
                        name={'nome'}
                        time={'horário'}
                        info={'Info'}
                    />
                    <DashboardCard
                        isRemovable={true}
                        date={'data'}
                        name={'nome'}
                        time={'horário'}
                        info={'Info'}
                    />
                </CardsBox>
                <Line />
                <Title>
                    <h2>Últimos atendimentos</h2>
                </Title>
                <CardsBox>
                    <DashboardCard
                        isRemovable={false}
                        date={'data'}
                        name={'nome'}
                        time={'horário'}
                        info={'Info'}
                    />
                    <DashboardCard
                        isRemovable={false}
                        date={'data'}
                        name={'nome'}
                        time={'horário'}
                        info={'Info'}
                    />
                    <DashboardCard
                        isRemovable={false}
                        date={'data'}
                        name={'nome'}
                        time={'horário'}
                        info={'Info'}
                    />
                </CardsBox>
                <Line />
            </SectionInfo>
        </>
    )
}

export default DashboardPatient
