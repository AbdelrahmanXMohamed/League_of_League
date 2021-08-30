import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Button,
  CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import Logo from "../resource/Logo.png";
import "../style/Navbar.css";

const Navbar = (props) => {
  const [anchor, setAnchor] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const open = anchor ? "mobNav" : "mobNavBack";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = () => {
    setShow(true);
    if (show) {
      setAnchor(!anchor);
      return;
    }
    setAnchor(!anchor);
  };
  /*
  const handleScroll = () => {
    let display = window.scrollY;
    console.log(display);
    if (display) {
      setAnchor(false);
      setShow(false);
    }
  };*/

  return (
    <div className="Navbar">
      <CssBaseline />
      <div>
        <div className="root">
          <AppBar className="navColor">
            <Toolbar>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className="menuButton"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon className="makeItColor root" />
                  </IconButton>
                </>
              ) : null}
              <img src={Logo} alt="logo" width="65px" />
              <div className="title">
                {isMobile ? null : (
                  <>
                    <Button
                      variant="text"
                      component={Link}
                      to="/"
                      className="makeItColor root"
                    >
                      Home
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/champtions"
                      className="makeItColor root"
                    >
                      Champtions
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/About"
                      className="makeItColor root"
                    >
                      About
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/Personal"
                      className="makeItColor root"
                    >
                      Personal
                    </Button>
                  </>
                )}
              </div>

              <Button className="makeItColor" component={Link} to="/Login">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        {isMobile && show ? (
          <div className={open}>
            <div className={anchor ? "pad" : "padNone"}>
              <Button
                variant="text"
                component={Link}
                to="/"
                className="makeItColor root"
              >
                Home
              </Button>
              <Button
                variant="text"
                component={Link}
                to="/Champtions"
                className="makeItColor root"
              >
                Champtions
              </Button>
              <Button
                variant="text"
                component={Link}
                to="/About"
                className="makeItColor root"
              >
                About
              </Button>
              <Button
                variant="text"
                component={Link}
                to="/Personal"
                className="makeItColor root"
              >
                Personal
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
/*
  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/champtions"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography variant="h6"> Champtions </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/About"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography variant="h6"> About</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Personal"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography variant="h6"> Personal </Typography>
                    </MenuItem>
                  </Menu>
*/
