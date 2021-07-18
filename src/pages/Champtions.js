import React, { useState, useEffect } from "react";
import ChamptionsCard from "../components/ChamptionsCard";
import Loading from "../components/Loading";
import "../style/Champtions.css";

const Champtions = () => {
  const [champtions, setChamptions] = useState([]);
  const getData = () => {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((data) => setChamptions(data.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Champtions Page</h1>
      {!champtions ? (
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
