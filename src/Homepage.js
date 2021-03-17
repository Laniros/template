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
  gridList: {
    height: 650,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <GridList
        spacing={20}
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
