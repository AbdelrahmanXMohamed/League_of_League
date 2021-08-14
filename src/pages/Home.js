import React, { useState, useEffect } from "react";
import "../style/Home.css";
import Video from "../resource/Arcane Animated Series Official Netflix Announcement.mp4";
const Home = () => {
  const [champtions, setChamptions] = useState([]);
  const getData = () => {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      .then((response) => response.json())
      .then((data) => data)
      .then((data) =>
        fetch(
          `http://ddragon.leagueoflegends.com/cdn/${data[0]}/data/en_US/champion.json`
        )
          .then((response) => response.json())
          .then((data) => setChamptions(data.data))
      );
  };
  useEffect(() => {
    setTimeout(() => getData(), 0);
  }, []);
  return (
    <>
      <div className="backgroundVideo">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          src={Video}
          type="video/mp4"
        />
        <div className="search">
          <input type="text" list="search" />
          <datalist id="search">
            {Object.keys(champtions).map((champ) => (
              <React.Fragment key={champ}>
                <option
                  style={{
                    backgroundImage:
                      "url(" +
                      "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png" +
                      ")",
                  }}
                  value={champtions[champ].name}
                ></option>
              </React.Fragment>
            ))}
          </datalist>
        </div>
      </div>
    </>
  );
};

export default Home;
