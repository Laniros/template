import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

function About() {
  const useStyles = makeStyles(() => ({
    box: {
      marginTop: "40px",
      textAlign: "center",
      border: "2px solid black",
      height: "80%",
      width: "40%",
      margin: "auto",
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <p>Hi There!</p>
      <p>Here is the place where you would write about yourself!</p>
      <p>
        If you want a site of your own, contact me at{" "}
        <a href="mailto:laniros18692@gmail.com">laniros18692@gmail.com</a>
      </p>
    </Box>
  );
}

export default About;
