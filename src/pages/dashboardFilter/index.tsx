import { useContext, useEffect, useState } from "react";
import CardProfessional from "../../components/cardProfessional";
import { ProfessionalContext } from "../../providers/professionals";
import Bar from "../../components/bar";
import { ContainerSearch, ContainerProfessionals } from "./styles";
import { FaSearch } from "react-icons/fa";

interface dataProps {
  value: string;
}

const DashboardFilter = () => {
  const { professionals, filterProfessional } = useContext(ProfessionalContext);
  const [value, setValue] = useState("");
  const [fisrRender, setFisrRender] = useState(1);

  useEffect(() => {
    if (fisrRender === 1) {
      // eslint-disable-next-line no-lone-blocks
      {
        professionals
          .sort(() => 0.5 - Math.random())
          .map((professional, index) => {
            setFisrRender(0);
            return <CardProfessional key={index} professional={professional} />;
          });
      }
    }
  });

  return (
    <>
      <Bar />
      <ContainerSearch>
        <p>Busque um profissional</p>
        <div className="input">
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <FaSearch
            onClick={() => {
              filterProfessional(value);
              setValue("");
            }}
          />
        </div>
      </ContainerSearch>
      <ContainerProfessionals>
        {professionals.map((professional, index) => {
          return <CardProfessional key={index} professional={professional} />;
        })}
      </ContainerProfessionals>
    </>
  );
};
export default DashboardFilter;
