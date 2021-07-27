import React from "react";
import "../style/ChamptionsCard.css";
const ChamptionsCard = ({ champ }) => {
  return (
    <div className="ChamptionsCard">
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
