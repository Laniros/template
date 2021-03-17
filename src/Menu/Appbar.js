import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
    color: "white",
    background: "white",
  },
  title: {
    color: "black",
  },
  button: {
    textDeorationLine: "overline",
  },
}));

const Bar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar elevation={0} position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            SHALOM TIKVA
          </Typography>
          <Button className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Bar;
