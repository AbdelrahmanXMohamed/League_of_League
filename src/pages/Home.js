import React, { useRef, useState } from "react";
import logo from "../resource/Logo.png";
import PopUp from "./PopUp";
const Home = () => {
  const Chamption = useRef(null)
  const [popUp, setPopUp] = useState(false)
  const handlePopUp = () => {
    setPopUp(!popUp)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePopUp();

  }
  return (
    <>
      <div className="Home">
        <div className="Top">
          <img src={logo} alt="logo" />
          <div className="SearchBorder">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Chamption Name"
                type="text"
                ref={Chamption}
                className="Search"
              />
            </form>
          </div>
        </div>
      </div>
      {
        popUp ? <PopUp Chamption={Chamption} handlePopUp={handlePopUp} /> : null
      }


    </>
  );
};

export default Home;
