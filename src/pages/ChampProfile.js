import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utilities/axios";
import { Skeleton } from "@material-ui/lab";
const ChampProfile = (props) => {
  let { id } = useParams();
  let [champdata, setChampdata] = useState(null);
  let [version, setVersion] = useState("");

  useEffect(() => {
    axiosInstance((localStorage.getItem('currentUser') && 'Token ' + JSON.parse(localStorage.getItem('currentUser')).token) || '').get(`api/certainChamption/${id}`).then(function ({ data }) {
      setChampdata(data.data[`${id}`])
      setVersion(data.version)
    }).catch(err => console.log(err.message))
  }, [id])
  return (
    <>
      <div className="ChampProfile">
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
                className="Skeleton"


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
            <h2>How to counter {id || champdata.name} ?</h2>
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
      </div>
    </>
  );
};

export default ChampProfile;
