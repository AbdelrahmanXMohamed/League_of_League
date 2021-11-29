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
    fetch("http://127.0.0.1:5000/api/currentChampions")
      .then((response) => response.json())
      .then((data) => {
        let champ = Object.keys(data.data).map((key) => data.data[key]);
        setChamptions(champ);
        setVersion(data.version);
      });
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
