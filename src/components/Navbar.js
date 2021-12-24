import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Logo from "../resource/Logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(() => true)
  const [start, setStart] = useState(() => true)
  const handleNavbar = () => {
    setNavbar(!navbar)
    setStart(false)
  }
  return (
    <div className={navbar ? "Navbar" : "Navbar Toggled"}>
      <MenuIcon className="makeItColor Toggle" onClick={() => handleNavbar()} />
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className={start ? "start" : navbar ? "mobileNav" : "mobileNav addAnimation"} >
        <Link className="makeItColor" to="/">
          Home
        </Link>
        <Link className="makeItColor" to="/champtions">
          Champtions
        </Link>
        <Link className="makeItColor" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <Link to="/login" className="makeItColor right">
        Login
      </Link>

    </div >
  );
};

export default Navbar;
/*

*/
