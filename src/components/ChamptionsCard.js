import React from "react";
import { useHistory } from "react-router-dom";
import "../style/ChamptionsCard.css";
const ChamptionsCard = ({ champ }) => {
  let history = useHistory();

  const go = () => {
    history.push(`/Champtions/Profile/${champ.id}`);
  };

  return (
    <div className="ChamptionsCard" onClick={go}>
      <figure className="card">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
          alt={champ.name}
        />
        <figcaption>{champ.name}</figcaption>
      </figure>
    </div>
  );
};

export default ChamptionsCard;
