import React from "react";
import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

interface CardKnowMoreProps {
  showCard: () => void;
}

export default function CardKnowMore({ showCard }: CardKnowMoreProps) {
  return (
    <Container>
      <div>
        <h1>Um pouco mais</h1>
        <FaTimes onClick={showCard} />
        <p>
          A equipe formada por 5 integrantes com cargos experimentais que
          possuem finalidade didática e de aprendizagem, Tech Leader, Scrum
          Master, Product Owner e Quality Assurance. Ampliou o campo de
          atendimento remoto no âmbito da pandemia Covid-19. A aplicação foi
          criada com o objetivo de facilitar o atendimento remoto entre paciente
          e profissional. Adotando profissionais de diferentes áreas da saúde
          comportamental. Psicólogos, coaches, terapeutas e etc. Oferecendo uma
          maneira justa de atendimentos e respectivas pesquisas a respeito do
          profissional. Onde todos são mostrados de maneira aleatória no campo
          de pesquisa, para que não ocorra um privilégio para um profissional
          específico. Dando oportunidade para todos os profissionais
          cadastrados, independente do nível de experiência e proximidade com a
          aplicação através de créditos e ações. A aplicação desenvolvida, no
          campo de estudo e aprendizado, confirma a seriedade de um projeto
          front-end com as relações sociais do meio em que vivemos.
         
          <h5>Turma de Maio, 2021</h5>
        </p>
      </div>
    </Container>
  );
}
