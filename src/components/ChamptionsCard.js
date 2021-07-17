import React from "react";
import "../style/ChamptionsCard.css"
const ChamptionsCard = ({ champ }) => {
  console.log(champ);
  return (
    <div className="ChamptionsCard">
      <div className="ChampImage">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
          alt={champ.name}
        />
      </div>
    </div>
  );
};

export default ChamptionsCard;
