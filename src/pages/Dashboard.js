import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <center>
        <h1>Dashboard Page</h1>
      </center>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={3} sm={3} xs={6}>
            <img
              src="https://dummyimage.com/200x200/000/fff"
              style={{ width: "100%", height: "100%" }}
              alt="logo"
            />
          </Grid>
          <Grid item md={9} sm={3} xs={6}>
            <img
              src="https://dummyimage.com/200x200/000/fff"
              style={{ width: "25%", height: "25%" }}
              alt="logo"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
