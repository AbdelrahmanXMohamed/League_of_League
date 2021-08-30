import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVersionProvider } from "../context/ContextChamption";
const ChampProfile = (props) => {
  let { id } = useParams();
  let [champdata, setChampdata] = useState({});
  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => setChampdata(data.data));
  }, []);
  //
  console.log(useVersionProvider());
  return (
    <>
      <h1>ChampProfile Page {id}</h1>
    </>
  );
};

export default ChampProfile;
