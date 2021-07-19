import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  SwipeableDrawer,
  CssBaseline,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
/*import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";*/
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";
import "../style/Navbar.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const toggleDrawer = (open) => (event) => {
    setAnchor(open);
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="Navbar">
      <CssBaseline />
      <HideOnScroll {...props}>
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
                  <Drawer
                    anchor="top"
                    variant="persistent"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                  >
                    <div
                      className="pad"
                      onClick={toggleDrawer(false)}
                      onKeyDown={toggleDrawer(false)}
                    >
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
                  </Drawer>
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
