import React, { useState, useEffect } from "react";
import ChamptionsCard from "../components/ChamptionsCard";
import Loading from "../components/Loading";
import axiosInstance from '../utilities/axios';

const Champtions = () => {
  let [champdata, setChampdata] = useState(() => []);
  useEffect(() => {
    axiosInstance((localStorage.getItem('currentUser') && 'Token ' + JSON.parse(localStorage.getItem('currentUser')).token) || '').get("api/currentChampions").then(
      function ({ data }) {
        let champtions = []
        Object.keys(data.data).map(function (key) {
          champtions = [...champtions, data.data[key]]
          return null
        })
        setChampdata(champtions)
      }
    ).catch(err => console.log(err.message))

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
