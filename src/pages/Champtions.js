import React, { useState, useEffect } from "react";
import ChamptionsCard from "../components/ChamptionsCard";
import Loading from "../components/Loading";
import { useVersionProvider } from "../context/ContextChamption";
import "../style/Champtions.css";
const Champtions = () => {
  const [champtions, setChamptions] = useState([]);
  let version = useVersionProvider();

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
    )
      .then((response) => response.json())
      .then((data) => setChamptions(data.data));
  }, [version]);
  return (
    <>
      {champtions.length === 0 ? (
        <Loading />
      ) : (
        <div className="Champtions">
          {Object.keys(champtions).map((champ) => (
            <ChamptionsCard champ={champtions[champ]} key={champ} />
          ))}
        </div>
      )}
    </>
  );
};

export default Champtions;
