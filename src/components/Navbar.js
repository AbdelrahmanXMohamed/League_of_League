import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";
import "../style/Navbar.css";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor) ? "mobNav" : "mobNavBack";
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = () => {
    if (show) {
      setAnchor(!anchor);
      setTimeout(() => {
        setShow(!show);
      }, 750);

      return;
    }
    setAnchor(!anchor);
    setShow(!show);
  };

  return (
    <div className="Navbar">
      <CssBaseline />
      <HideOnScroll {...props}>
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
              <div className="pad">
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
              </div>
            </div>
          ) : null}
        </div>
      </HideOnScroll>
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
