import React, { useState, useEffect } from "react";
import ChamptionsCard from "../components/ChamptionsCard";
import Loading from "../components/Loading";
import { useVersionProvider } from "../context/ContextChamption";
import { Zoom } from "@material-ui/core";
import "../style/Champtions.css";
const Champtions = () => {
  let [champdata, setChampdata] = useState([]);
  const { champtions } = useVersionProvider();
  useEffect(() => setChampdata(champtions));
  return (
    <>
      {champdata.length === 0 ? (
        <Loading />
      ) : (
        <div className="Champtions">

          {champdata.map((champ, index) =>

            <Zoom
              key={index}
              in={true}
              style={{
                transitionDelay: `${index * 400}ms`,
              }}
            >
              <ChamptionsCard champ={champ} />
            </Zoom>

          )}

        </div>
      )}
    </>
  );
};

export default Champtions;
