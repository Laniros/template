import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "white",
    color: "white",
    background: "white",
    overflow: "hidden",
    position: "sticky",
  },
  title: {
    marginLeft: "20px",
    color: "black",
    flexGrow: "1",
    marginBottom: "10px",
  },
  button: {
    textDecorationLine: "overline",
    borderBottomWidth: "10px",
    borderBottom: "10px",

    "&:hover": {
      //you want this to be the same as the backgroundColor above
      color: "#000000",
      textDecorationLine: "overline",
    },
  },
  link: {
    textUnderlineOffset: "1px",
    marginBottom: "1px",
  },
  allLinks: {
    marginRight: "100px",
  },
}));

const Bar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);

  useEffect(() => {
    let path = window.location.pathname;
    if (path === "/about" && value !== 2) setValue(2);
    else if (path === "/portfolio" && value !== 1) setValue(1);
    else if (path === "/" && value !== 0) setValue(0);
  }, [value]);

  return (
    <div>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            JOHN SNOW
          </Typography>
          <div className={classes.allLinks}>
            <Link className={classes.link} to="/">
              <Button
                className={classes.button}
                onClick={() => setValue(0)}
                style={value === 0 ? { color: "#808080" } : { color: "black" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                className={classes.button}
                onClick={() => setValue(1)}
                style={value === 1 ? { color: "#808080" } : { color: "black" }}
              >
                Portfolio
              </Button>
            </Link>
            <Link to="/about">
              <Button
                className={classes.button}
                onClick={() => setValue(2)}
                style={value === 2 ? { color: "#808080" } : { color: "black" }}
              >
                About
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Bar;
