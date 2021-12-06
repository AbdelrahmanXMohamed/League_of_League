import React, { useRef } from "react";
import logo from "../resource/Logo.png";
import axios from "axios";

const Home = () => {
  const Chamption = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      url: "http://127.0.0.1:5000/api/dataOfCertainUser",
      method: "post",
      data: {
        region: "eun1",
        user: Chamption.current.value,
      }
    })
      .then(({ data }) => { console.log(data) })
      .catch(err => console.log(err))
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
    </>
  );
};

export default Home;
