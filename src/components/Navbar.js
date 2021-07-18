import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
  CssBaseline,
} from "@material-ui/core";
/*import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";*/
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navColor: { backgroundColor: "#e4580d" },
  title: {
    flexGrow: 1,
    marginTop: "7px",
  },
  links: {
    display: "inline",
  },
  makeItWhite: {
    color: "white",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

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
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div className={classes.root}>
          <AppBar className={classes.navColor}>
            <Toolbar>
              <img src={Logo} alt="logo" width="65px" />
              <div className={classes.title}>
                {isMobile ? (
                  <>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={handleMenu}
                    ></IconButton>{" "}
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
                  </>
                ) : (
                  <>
                    <Button
                      variant="text"
                      component={Link}
                      to="/"
                      className={classes.makeItWhite}
                    >
                      Home
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/champtions"
                      className={classes.makeItWhite}
                    >
                      Champtions
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/About"
                      className={classes.makeItWhite}
                    >
                      About
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/Personal"
                      className={classes.makeItWhite}
                    >
                      Personal
                    </Button>
                  </>
                )}
              </div>

              <Button color="inherit" component={Link} to="/Login">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
