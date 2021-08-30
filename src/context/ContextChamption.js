import React, { useState, useEffect, useContext } from "react";

const ContextVersion = React.createContext();
export function useVersionProvider() {
  return useContext(ContextVersion);
}
export function VersionProvider({ children }) {
  // const [champtions, setChamptions] = useState([]);
  // for lastest version
  const [version, setVersion] = useState(null);
  const getData = () => {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      .then((response) => response.json())
      .then((data) => setVersion(data[0]));
    //getting all chamption
    /*.then((data) =>
        fetch(
          `http://ddragon.leagueoflegends.com/cdn/${data[0]}/data/en_US/champion.json`
        )
          .then((response) => response.json())
          .then((data) => setChamptions(data.data))
      );*/
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ContextVersion.Provider value={version}>
      {children}
    </ContextVersion.Provider>
  );
}
