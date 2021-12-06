import React from "react";
import { useHistory } from "react-router-dom";
const ChamptionsCard = ({ champ, index }) => {
  let history = useHistory();
  const go = () => {
    history.push(`/Champtions/Profile/${champ.id}`);
  };
  return (
    <div className="ChamptionsCard" onClick={go} style={{ animationDelay: index * 0.5 + "s" }}>
      <figure className="card">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
          alt={champ.name}
        />
        <figcaption><p>{champ.name}</p></figcaption>
      </figure>
    </div>
  );
};

export default ChamptionsCard;
