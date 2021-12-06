import React, { useState, useEffect } from "react";
import ChamptionsCard from "../components/ChamptionsCard";
import Loading from "../components/Loading";
import axios from 'axios';

const Champtions = () => {
  let [champdata, setChampdata] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/currentChampions").then(
      function ({ data }) {
        let champtions = []
        Object.keys(data.data).map(function (key) {
          champtions = [...champtions, data.data[key]]
          return null
        })
        setChampdata(champtions)
      }
    )

  }, []);
  return (
    <>
      {champdata.length === 0 ? (
        <Loading />
      ) : (
        <div className="Champtions">

          {champdata.map((champ, index) =>

            <ChamptionsCard key={index} champ={champ} index={index} />

          )}

        </div>
      )}
    </>
  );
};

export default Champtions;
