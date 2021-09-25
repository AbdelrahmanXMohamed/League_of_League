import React from "react";
import { Button } from "@material-ui/core";

import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
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
        to="/dashboard"
        className="makeItColor root"
      >
        Dashboard
      </Button>
    </>
  );
};
export default NavLinks;
