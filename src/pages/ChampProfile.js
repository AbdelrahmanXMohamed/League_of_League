import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVersionProvider } from "../context/ContextChamption";
import { Container } from "@material-ui/core";
import "../style/ChampProfile.css";
const ChampProfile = (props) => {
  let { id } = useParams();
  let [champdata, setChampdata] = useState({});
  let version = useVersionProvider();
  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => setChampdata(data.data[id]));
  }, [id, version]);
  console.log(champdata);
  return (
    <>
      <Container className="ChampProfile">
        <div className="ProHead">
          <div className="Cover">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
              alt={id}
            />
          </div>
          <div className="Profile">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`}
              alt={id}
            />
            <div className="Name">
              <p>{id}</p>
            </div>
          </div>
        </div>

        <div className="ProBody">
          <div className="lore">
            <h2>Lore</h2>
            <p className="lore">{champdata.lore}</p>
          </div>
        </div>
        <div className="ProBody">
          <h2>Skills</h2>
          <p className="lore">{champdata.lore}</p>
        </div>
      </Container>
    </>
  );
};

export default ChampProfile;
