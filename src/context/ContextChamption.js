import React, { useState, useEffect, useContext } from "react";

const ContextVersion = React.createContext();
export function useVersionProvider() {
  return useContext(ContextVersion);
}
export function VersionProvider({ children }) {
  const [champtions, setChamptions] = useState([]);
  // for lastest version
  const [version, setVersion] = useState(null);
  const getData = () => {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      .then((response) => response.json())
      .then((versions) =>
        fetch(
          `http://ddragon.leagueoflegends.com/cdn/${versions[0]}/data/en_US/champion.json`
        )
          .then((response) => response.json())
          .then((data) => {
            let champ = Object.keys(data.data).map((key) => data.data[key]);
            setChamptions(champ);
            setVersion(versions[0]);
          })
      );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ContextVersion.Provider value={{ version, champtions }}>
      {children}
    </ContextVersion.Provider>
  );
}
