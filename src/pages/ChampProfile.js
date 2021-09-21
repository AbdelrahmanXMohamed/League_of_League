import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVersionProvider } from "../context/ContextChamption";
import { Container, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import "../style/ChampProfile.css";
const ChampProfile = (props) => {
  let { id } = useParams();
  let [champdata, setChampdata] = useState(null);
  let { version } = useVersionProvider();
  const theme = useTheme();
  const isXLarge = useMediaQuery(theme.breakpoints.up("xl"));

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => setChampdata(data.data[id]));
  }, [id, version]);
  return (
    <>
      <Container maxWidth={isXLarge ? "xl" : "lg"} className="ChampProfile">
        <div className="ProHead">
          <div className="Cover">
            {Boolean(champdata) ? (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
                alt={id}
              />
            ) : (
              <Skeleton
                animation="wave"
                variant="rect"
                width={"100%"}
                height={"100%"}
                className="Skeleton"
              />
            )}
          </div>
          <div className="Profile">
            {Boolean(champdata) ? (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`}
                alt={id}
              />
            ) : (
              <Skeleton
                animation="wave"
                variant="circle"
                width={"100%"}
                height={"100%"}
              />
            )}
          </div>
          <center className="Name">
            {Boolean(champdata) ? (
              <h3>{champdata.name}</h3>
            ) : (
              <>
                <Skeleton animation="wave" variant="text" />
              </>
            )}
          </center>
          <center className="Title">
            {Boolean(champdata) ? (
              <p>{champdata.title}</p>
            ) : (
              <>
                <Skeleton animation="wave" variant="text" />
              </>
            )}
          </center>
        </div>
        <div className="ProBody">
          <div className="Lore">
            <h2>Lore</h2>
            {Boolean(champdata) ? (
              <p className="lore">{champdata.lore}</p>
            ) : (
              <>
                <Skeleton animation="wave" variant="text" />
                <Skeleton animation="wave" variant="text" />
                <Skeleton animation="wave" variant="text" />
              </>
            )}
          </div>
        </div>
        <br />
        <div className="ProBody">
          <div className="Skills">
            <h2>How to counter ?</h2>
            {Boolean(champdata) ? (
              <ul className="lore">
                {champdata["enemytips"].map((data, index) => (
                  <li key={index} className="lore">
                    {data}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <Skeleton animation="wave" variant="text" />
                <Skeleton animation="wave" variant="text" />
                <Skeleton animation="wave" variant="text" />
              </>
            )}
          </div>
        </div>
        <br />
        <div className="ProBody">
          <div className="Skills">
            <h2>How to Win with {id || champdata.name} ?</h2>
            {Boolean(champdata) ? (
              <ul className="lore">
                {champdata["allytips"].map((data, index) => (
                  <li key={index} className="lore">
                    {data}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <Skeleton animation="wave" variant="text" />
                <Skeleton animation="wave" variant="text" />
                <Skeleton animation="wave" variant="text" />
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ChampProfile;
