import React, { useState, useEffect } from "react";
import ChamptionsCard from "../components/ChamptionsCard";
import Loading from "../components/Loading";
import "../style/Champtions.css";

const Champtions = () => {
  const [champtions, setChamptions] = useState([]);
  const getData = () => {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      .then((response) => response.json())
      .then((data) => data)
      .then((data) =>
        fetch(
          `http://ddragon.leagueoflegends.com/cdn/${data[0]}/data/en_US/champion.json`
        )
          .then((response) => response.json())
          .then((data) => setChamptions(data.data))
      );
  };
  useEffect(() => {
    setTimeout(() => getData(), 0);
  }, []);
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
