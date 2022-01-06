import React, { useState } from "react";
import logo from "../resource/Logo.png";
import PopUp from "./PopUp";
import { useForm } from "react-hook-form";
const Home = () => {
  const [Chamption, setChamption] = useState()
  const { handleSubmit, register } = useForm()
  const [popUp, setPopUp] = useState(false)
  const handlePopUp = () => {
    setPopUp(!popUp)
  }
  const Submit = (data) => {
    setChamption(() => data.Chamption)
    handlePopUp();
  }
  return (
    <>
      <div className="Home">
        <div className="Top">
          <img src={logo} alt="logo" />
          <div className="SearchBorder">
            <form onSubmit={handleSubmit(Submit)}>
              <input
                placeholder="Chamption Name"
                type="text"
                {...register("Chamption")}
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
