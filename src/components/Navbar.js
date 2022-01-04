import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Logo from "../resource/Logo.png";
import { useAuthState, useAuthDispatch, logout } from '../context/AuthContext/AuthIndex'

const Navbar = () => {
  const [navbar, setNavbar] = useState(() => true)
  const dispatch = useAuthDispatch()
  const [start, setStart] = useState(() => true)
  const { token } = useAuthState()
  useEffect(() => {
    if (localStorage.getItem('expires_in') && !(localStorage.getItem('expires_in') - Math.floor(Date.now() / 1000) >= 0) && Boolean(token)) {
      logout(dispatch);
    }
  }
    , [dispatch, token])

  const handleNavbar = () => {
    setNavbar(!navbar)
    setStart(false)
  }

  const handleLogout = () => {

    logout(dispatch);
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
        <Link className="makeItColor" to="/favorite">
          Favorite
        </Link>
      </div>
      {Boolean(token) ?
        <span onClick={handleLogout} className="makeItColor right">
          Logout
        </span> :
        <Link to="/login" className="makeItColor right">
          Login
        </Link>
      }
    </div >
  );
};

export default Navbar;
/*

*/
