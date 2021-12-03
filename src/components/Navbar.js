import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Logo from "../resource/Logo.png";

const Navbar = () => {
  let [navbar, setNavbar] = useState(true)

  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <div className={navbar ? "Navbar" : "Navbar animationReflect"}>
      <MenuIcon className="makeItColor Toggle" onClick={() => handleNavbar()} />
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className={navbar ? "mobileNav" : "mobileNav addAnimation"} >
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

    </div>
  );
};

export default Navbar;
/*

*/
