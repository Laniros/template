import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "20px",
    display: "flex",
    spacing: 8,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <GridList
        spacing={3}
        cellHeight={220}
        className={classes.gridList}
        cols={3}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Homepage;
